import { supabase, Boat } from "@/lib/supabase";

export const boatsService = {
  // Ottieni tutte le barche
  async getAllBoats() {
    const { data, error } = await supabase
      .from("boats")
      .select(
        `
        *,
        users!boats_owner_id_fkey (
          id,
          full_name,
          rating,
          reviews_count
        )
      `
      )
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  // Ottieni una barca specifica
  async getBoatById(id: number) {
    const { data, error } = await supabase
      .from("boats")
      .select(
        `
        *,
        users!boats_owner_id_fkey (
          id,
          full_name,
          rating,
          reviews_count
        )
      `
      )
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  // Cerca barche con filtri
  async searchBoats(filters: {
    type?: string;
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    capacity?: number;
    search?: string;
  }) {
    let query = supabase.from("boats").select(`
        *,
        users!boats_owner_id_fkey (
          id,
          full_name,
          rating,
          reviews_count
        )
      `);

    if (filters.type) {
      query = query.eq("type", filters.type);
    }

    if (filters.location) {
      query = query.ilike("location", `%${filters.location}%`);
    }

    if (filters.minPrice) {
      query = query.gte("price_per_day", filters.minPrice);
    }

    if (filters.maxPrice) {
      query = query.lte("price_per_day", filters.maxPrice);
    }

    if (filters.capacity) {
      query = query.gte("capacity", filters.capacity);
    }

    if (filters.search) {
      query = query.or(
        `name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`
      );
    }

    const { data, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error) throw error;
    return data;
  },

  // Crea una nuova barca
  async createBoat(
    boatData: Omit<
      Boat,
      "id" | "created_at" | "updated_at" | "rating" | "reviews_count"
    >
  ) {
    const { data, error } = await supabase
      .from("boats")
      .insert([
        {
          ...boatData,
          rating: 0,
          reviews_count: 0,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Aggiorna una barca
  async updateBoat(id: number, updates: Partial<Boat>) {
    const { data, error } = await supabase
      .from("boats")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Elimina una barca
  async deleteBoat(id: number) {
    const { error } = await supabase.from("boats").delete().eq("id", id);

    if (error) throw error;
  },

  // Ottieni le barche di un proprietario
  async getBoatsByOwner(ownerId: string) {
    const { data, error } = await supabase
      .from("boats")
      .select("*")
      .eq("owner_id", ownerId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },
};
