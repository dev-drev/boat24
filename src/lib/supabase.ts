import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipi TypeScript per le nostre tabelle
export interface Boat {
  id: number;
  name: string;
  type: "gommone" | "vela" | "motoscafo" | "catamarano";
  skipper: boolean;
  location: string;
  price_per_day: number;
  capacity: number;
  length: string;
  engine: string;
  year: number;
  description: string;
  features: string[];
  images: string[];
  license_required: string;
  owner_id: string;
  rating: number;
  reviews_count: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  avatar_url?: string;
  rating: number;
  reviews_count: number;
  created_at: string;
}

export interface Booking {
  id: number;
  boat_id: number;
  user_id: string;
  start_date: string;
  end_date: string;
  total_price: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  passengers: number;
  created_at: string;
}

export interface Review {
  id: number;
  boat_id: number;
  user_id: string;
  rating: number;
  comment: string;
  created_at: string;
}
