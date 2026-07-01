export type NavItem = {
  href: string;
  label: string;
  icon: "home" | "closet" | "upload" | "market" | "stylist" | "analytics" | "profile" | "settings";
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/closet", label: "Closet", icon: "closet" },
  { href: "/upload", label: "Upload", icon: "upload" },
  { href: "/marketplace", label: "Marketplace", icon: "market" },
  { href: "/stylist", label: "AI Stylist", icon: "stylist" },
  { href: "/analytics", label: "Analytics", icon: "analytics" },
  { href: "/profile", label: "Profile", icon: "profile" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export type ClothingItem = {
  id: number;
  name: string;
  brand: string;
  category: string;
  color: string;
  season: string;
  image: string;
  favorite: boolean;
  price: number;
  material: string;
  size: string;
  occasion: string;
  purchaseDate: string;
  notes: string;
};

export const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Sculpted Trench",
    brand: "A.P.C.",
    category: "Outerwear",
    color: "Sand",
    season: "Spring",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    favorite: true,
    price: 220,
    material: "Cotton",
    size: "M",
    occasion: "Work",
    purchaseDate: "2024-02-10",
    notes: "Perfect for rainy mornings.",
  },
  {
    id: 2,
    name: "Ribbed Knit Dress",
    brand: "Reformation",
    category: "Dress",
    color: "Olive",
    season: "Fall",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    favorite: false,
    price: 160,
    material: "Merino",
    size: "S",
    occasion: "Dinner",
    purchaseDate: "2023-11-20",
    notes: "Soft drape, easy layering.",
  },
  {
    id: 3,
    name: "Tailored Linen Shirt",
    brand: "Everlane",
    category: "Tops",
    color: "Cream",
    season: "Summer",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    favorite: true,
    price: 95,
    material: "Linen",
    size: "L",
    occasion: "Weekend",
    purchaseDate: "2024-06-02",
    notes: "Great for warm evenings.",
  },
  {
    id: 4,
    name: "Relaxed Denim",
    brand: "Mango",
    category: "Bottoms",
    color: "Midnight",
    season: "Winter",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    favorite: false,
    price: 110,
    material: "Denim",
    size: "M",
    occasion: "Casual",
    purchaseDate: "2023-09-15",
    notes: "Comfortable and polished.",
  },
];

export type ListingItem = {
  id: number;
  title: string;
  price: number;
  condition: string;
  seller: string;
  distance: string;
  favorite: boolean;
  category: string;
  size: string;
  image: string;
};

export const listings: ListingItem[] = [
  {
    id: 1,
    title: "Minimal Leather Tote",
    price: 140,
    condition: "Excellent",
    seller: "Mina",
    distance: "2.1 km",
    favorite: true,
    category: "Accessories",
    size: "One size",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Structured Blazer",
    price: 98,
    condition: "Very Good",
    seller: "Noah",
    distance: "5.0 km",
    favorite: false,
    category: "Outerwear",
    size: "M",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Silk Slip Dress",
    price: 78,
    condition: "Good",
    seller: "Ari",
    distance: "3.4 km",
    favorite: true,
    category: "Dress",
    size: "S",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
];

export type OutfitIdea = {
  id: number;
  title: string;
  description: string;
  occasion: string;
  weather: string;
  items: string[];
};

export const outfitIdeas: OutfitIdea[] = [
  {
    id: 1,
    title: "City Escapes",
    description: "Soft knit with tailored outerwear.",
    occasion: "Weekend",
    weather: "Clear",
    items: ["Tailored Linen Shirt", "Relaxed Denim"],
  },
  {
    id: 2,
    title: "Studio Lunch",
    description: "A polished neutral set for meetings.",
    occasion: "Work",
    weather: "Cool",
    items: ["Sculpted Trench", "Ribbed Knit Dress"],
  },
];

export type AnalyticsCard = {
  label: string;
  value: string;
  change: string;
};

export const analyticsCards: AnalyticsCard[] = [
  { label: "Total items", value: "42", change: "+6 this month" },
  { label: "Cost per wear", value: "$3.20", change: "Down 12%" },
  { label: "Most worn", value: "Denim", change: "19 uses" },
  { label: "Least worn", value: "Formal blazer", change: "2 uses" },
];
