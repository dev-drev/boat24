# 🚤 Setup Supabase per RentABoat

## 📋 Prerequisiti

- Account su [Supabase](https://supabase.com)
- Conoscenza base di SQL (opzionale, Supabase ha un'interfaccia visuale)

## 🚀 Configurazione Rapida

### 1. Crea un nuovo progetto Supabase

1. Vai su [supabase.com](https://supabase.com)
2. Clicca "New Project"
3. Scegli il tuo team/organizzazione
4. Inserisci:
   - **Name**: `rentaboat`
   - **Database Password**: (genera una password sicura)
   - **Region**: `West Europe` (o quella più vicina a te)

### 2. Ottieni le credenziali API

1. Nel dashboard di Supabase, vai su **Settings** → **API**
2. Copia:
   - **Project URL**
   - **anon public** key

### 3. Configura le variabili d'ambiente

Crea un file `.env.local` nella root del progetto:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Crea le tabelle del database

Vai su **Table Editor** nel dashboard di Supabase e crea queste tabelle:

#### Tabella `users`

```sql
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT,
  avatar_url TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tabella `boats`

```sql
CREATE TABLE boats (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('gommone', 'vela', 'motoscafo', 'catamarano')),
  skipper BOOLEAN NOT NULL DEFAULT false,
  location TEXT NOT NULL,
  price_per_day DECIMAL(10,2) NOT NULL,
  capacity INTEGER NOT NULL,
  length TEXT NOT NULL,
  engine TEXT NOT NULL,
  year INTEGER NOT NULL,
  description TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  images TEXT[] DEFAULT '{}',
  license_required TEXT NOT NULL,
  owner_id UUID REFERENCES users(id) NOT NULL,
  rating DECIMAL(3,2) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tabella `bookings`

```sql
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  boat_id INTEGER REFERENCES boats(id) NOT NULL,
  user_id UUID REFERENCES users(id) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  passengers INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Tabella `reviews`

```sql
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  boat_id INTEGER REFERENCES boats(id) NOT NULL,
  user_id UUID REFERENCES users(id) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(boat_id, user_id)
);
```

### 5. Configura le Row Level Security (RLS)

#### Per la tabella `users`:

```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);
```

#### Per la tabella `boats`:

```sql
ALTER TABLE boats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view boats" ON boats
  FOR SELECT USING (true);

CREATE POLICY "Owners can insert their own boats" ON boats
  FOR INSERT WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Owners can update their own boats" ON boats
  FOR UPDATE USING (auth.uid() = owner_id);

CREATE POLICY "Owners can delete their own boats" ON boats
  FOR DELETE USING (auth.uid() = owner_id);
```

#### Per la tabella `bookings`:

```sql
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own bookings" ON bookings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Boat owners can view bookings for their boats" ON bookings
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM boats WHERE boats.id = bookings.boat_id AND boats.owner_id = auth.uid()
    )
  );

CREATE POLICY "Users can create their own bookings" ON bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings" ON bookings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Boat owners can update bookings for their boats" ON bookings
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM boats WHERE boats.id = bookings.boat_id AND boats.owner_id = auth.uid()
    )
  );
```

#### Per la tabella `reviews`:

```sql
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews" ON reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create their own reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" ON reviews
  FOR UPDATE USING (auth.uid() = user_id);
```

### 6. Configura l'autenticazione

1. Vai su **Authentication** → **Settings**
2. Configura:
   - **Site URL**: `http://localhost:3000` (per sviluppo)
   - **Redirect URLs**: `http://localhost:3000/auth/callback`

### 7. Configura lo storage per le immagini

1. Vai su **Storage**
2. Crea un nuovo bucket chiamato `boat-images`
3. Configura le policy:

```sql
-- Permetti a tutti di vedere le immagini
CREATE POLICY "Anyone can view boat images" ON storage.objects
  FOR SELECT USING (bucket_id = 'boat-images');

-- Permetti agli utenti autenticati di caricare immagini
CREATE POLICY "Authenticated users can upload boat images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'boat-images'
    AND auth.role() = 'authenticated'
  );

-- Permetti ai proprietari di aggiornare le loro immagini
CREATE POLICY "Boat owners can update their images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'boat-images'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );
```

## 🧪 Test della configurazione

1. Riavvia il server di sviluppo:

```bash
npm run dev
```

2. Vai su `http://localhost:3000`
3. Prova a registrarti con un account
4. Verifica che i dati vengano salvati nel database

## 📊 Monitoraggio

Nel dashboard di Supabase puoi monitorare:

- **Database**: Query, performance, errori
- **Authentication**: Utenti registrati, sessioni
- **Storage**: File caricati, spazio utilizzato
- **Logs**: Tutte le attività dell'app

## 🔒 Sicurezza

- Tutte le tabelle hanno RLS abilitato
- Gli utenti possono accedere solo ai loro dati
- Le API sono protette da autenticazione
- Le password sono hashate automaticamente

## 📈 Scalabilità

Supabase può gestire:

- **50.000 utenti/mese** nel piano gratuito
- **500MB database** nel piano gratuito
- **1GB storage** nel piano gratuito
- **2GB bandwidth** nel piano gratuito

Per più traffico, considera il piano Pro ($25/mese).

## 🆘 Supporto

- [Documentazione Supabase](https://supabase.com/docs)
- [Community Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)
