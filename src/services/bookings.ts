import { supabase, Booking } from '@/lib/supabase'

export const bookingsService = {
  // Crea una nuova prenotazione
  async createBooking(bookingData: Omit<Booking, 'id' | 'created_at' | 'status'>) {
    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        ...bookingData,
        status: 'pending'
      }])
      .select(`
        *,
        boats (
          id,
          name,
          price_per_day,
          images
        ),
        users (
          id,
          full_name,
          email
        )
      `)
      .single()

    if (error) throw error
    return data
  },

  // Ottieni le prenotazioni di un utente
  async getUserBookings(userId: string) {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        boats (
          id,
          name,
          price_per_day,
          images,
          location
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Ottieni le prenotazioni per una barca
  async getBoatBookings(boatId: number) {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        users (
          id,
          full_name,
          email
        )
      `)
      .eq('boat_id', boatId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Aggiorna lo stato di una prenotazione
  async updateBookingStatus(bookingId: number, status: Booking['status']) {
    const { data, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', bookingId)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Cancella una prenotazione
  async cancelBooking(bookingId: number) {
    const { error } = await supabase
      .from('bookings')
      .delete()
      .eq('id', bookingId)

    if (error) throw error
  },

  // Controlla disponibilità di una barca
  async checkAvailability(boatId: number, startDate: string, endDate: string) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('boat_id', boatId)
      .in('status', ['pending', 'confirmed'])
      .or(`start_date.lte.${endDate},end_date.gte.${startDate}`)

    if (error) throw error
    return data.length === 0 // true se disponibile
  },

  // Calcola il prezzo totale
  async calculateTotalPrice(boatId: number, startDate: string, endDate: string) {
    const { data: boat, error } = await supabase
      .from('boats')
      .select('price_per_day')
      .eq('id', boatId)
      .single()

    if (error) throw error

    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    return {
      pricePerDay: boat.price_per_day,
      days,
      totalPrice: boat.price_per_day * days,
      serviceFee: 15,
      insurance: 25,
      grandTotal: (boat.price_per_day * days) + 40
    }
  }
} 