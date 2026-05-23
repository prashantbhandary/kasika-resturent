export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

export const RESTAURANT_INFO = {
  name: "KASIKA",
  nameJa: "カシカ",
  tagline: "Authentic Indian & Asian Dining Experience",
  description:
    "A premium culinary journey through the vibrant flavors of India and Asia, nestled in the heart of Tokorozawa.",
  address: "〒359-1111 埼玉県所沢市緑町4-15-20",
  addressEn: "4-15-20 Midoricho, Tokorozawa, Saitama 359-1111",
  phone: "04-2937-4758",
  mobile: "080-9815-8919",
  owner: "DEVI LAL",
  hours: {
    lunch: "11:30 – 15:00 (L.O. 14:30)",
    dinner: "17:30 – 22:30 (L.O. 22:00)",
    closed: "Tuesday",
  },
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};

export const MENU_CATEGORIES = [
  "Starters",
  "Curry",
  "Biryani",
  "Naan & Bread",
  "Rice",
  "Desserts",
  "Drinks",
];

export interface MenuItem {
  id: number;
  name: string;
  nameJa?: string;
  description: string;
  price: string;
  category: string;
  spice: 0 | 1 | 2 | 3;
  isVeg: boolean;
  isSignature?: boolean;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Samosa (2 pcs)",
    nameJa: "サモサ",
    description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney.",
    price: "¥580",
    category: "Starters",
    spice: 1,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 2,
    name: "Chicken Tikka",
    nameJa: "チキンティッカ",
    description: "Tender chicken marinated in yogurt and aromatic spices, grilled in tandoor oven.",
    price: "¥980",
    category: "Starters",
    spice: 2,
    isVeg: false,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    nameJa: "パニールティッカ",
    description: "Fresh cottage cheese marinated in spiced yogurt, flame-grilled to perfection.",
    price: "¥880",
    category: "Starters",
    spice: 1,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
  },
  {
    id: 4,
    name: "Tandoori Chicken (Half)",
    nameJa: "タンドーリチキン",
    description: "Classic whole chicken marinated overnight in spices, roasted in clay oven.",
    price: "¥1,280",
    category: "Starters",
    spice: 2,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
  },
  // Curry
  {
    id: 5,
    name: "Butter Chicken",
    nameJa: "バターチキンカレー",
    description: "Slow-cooked chicken in a velvety tomato-butter sauce with aromatic spices.",
    price: "¥1,180",
    category: "Curry",
    spice: 1,
    isVeg: false,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
  },
  {
    id: 6,
    name: "Dal Makhani",
    nameJa: "ダルマカニ",
    description: "Black lentils slow-cooked overnight with butter, cream, and warming spices.",
    price: "¥980",
    category: "Curry",
    spice: 1,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
  },
  {
    id: 7,
    name: "Lamb Rogan Josh",
    nameJa: "ラムローガンジョッシュ",
    description: "Tender lamb braised in Kashmiri spices with saffron and yogurt.",
    price: "¥1,480",
    category: "Curry",
    spice: 3,
    isVeg: false,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
  },
  {
    id: 8,
    name: "Palak Paneer",
    nameJa: "パラクパニール",
    description: "Fresh cottage cheese cubes in a silky smooth spinach sauce.",
    price: "¥1,080",
    category: "Curry",
    spice: 1,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 9,
    name: "Prawn Masala",
    nameJa: "プラウンマサラ",
    description: "Juicy tiger prawns in a rich onion-tomato gravy with coastal spices.",
    price: "¥1,680",
    category: "Curry",
    spice: 2,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
  },
  // Biryani
  {
    id: 10,
    name: "Chicken Biryani",
    nameJa: "チキンビリヤニ",
    description: "Fragrant basmati rice slow-cooked with chicken, saffron, and whole spices.",
    price: "¥1,380",
    category: "Biryani",
    spice: 2,
    isVeg: false,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d60e?w=600&q=80",
  },
  {
    id: 11,
    name: "Vegetable Biryani",
    nameJa: "野菜ビリヤニ",
    description: "Aromatic basmati rice layered with seasonal vegetables and fragrant spices.",
    price: "¥1,180",
    category: "Biryani",
    spice: 1,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
  },
  {
    id: 12,
    name: "Lamb Biryani",
    nameJa: "ラムビリヤニ",
    description: "Premium lamb pieces dum-cooked with aged basmati and saffron-infused broth.",
    price: "¥1,680",
    category: "Biryani",
    spice: 2,
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d60e?w=600&q=80",
  },
  // Naan & Bread
  {
    id: 13,
    name: "Garlic Naan",
    nameJa: "ガーリックナン",
    description: "Soft leavened bread baked in tandoor, brushed with garlic butter and herbs.",
    price: "¥380",
    category: "Naan & Bread",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
  },
  {
    id: 14,
    name: "Cheese Naan",
    nameJa: "チーズナン",
    description: "Fluffy naan stuffed with melted cheese, baked fresh in tandoor oven.",
    price: "¥480",
    category: "Naan & Bread",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
  },
  // Rice
  {
    id: 15,
    name: "Saffron Basmati Rice",
    nameJa: "サフランライス",
    description: "Aromatic long-grain basmati rice infused with premium saffron strands.",
    price: "¥380",
    category: "Rice",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
  },
  // Desserts
  {
    id: 16,
    name: "Gulab Jamun",
    nameJa: "グラブジャムン",
    description: "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup.",
    price: "¥580",
    category: "Desserts",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 17,
    name: "Mango Kulfi",
    nameJa: "マンゴーカルフィ",
    description: "Traditional Indian ice cream with Alphonso mango, cardamom, and pistachios.",
    price: "¥680",
    category: "Desserts",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
  },
  // Drinks
  {
    id: 18,
    name: "Mango Lassi",
    nameJa: "マンゴーラッシー",
    description: "Chilled yogurt blended with ripe Alphonso mangoes and a hint of cardamom.",
    price: "¥680",
    category: "Drinks",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
  },
  {
    id: 19,
    name: "Masala Chai",
    nameJa: "マサラチャイ",
    description: "Traditional spiced tea brewed with ginger, cardamom, cinnamon, and milk.",
    price: "¥480",
    category: "Drinks",
    spice: 1,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
  },
  {
    id: 20,
    name: "Indian Craft Beer",
    nameJa: "インドクラフトビール",
    description: "Chilled premium Indian lager, crisp and refreshing.",
    price: "¥780",
    category: "Drinks",
    spice: 0,
    isVeg: true,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
  },
];

export const CATEGORIES_FEATURED = [
  {
    title: "Indian Curry",
    titleJa: "インドカレー",
    description: "Rich, aromatic gravies slow-cooked with authentic spices",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    count: "12 dishes",
  },
  {
    title: "Tandoori Specials",
    titleJa: "タンドーリ",
    description: "Clay-oven roasted meats and vegetables with smoky perfection",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
    count: "8 dishes",
  },
  {
    title: "Biryani",
    titleJa: "ビリヤニ",
    description: "Fragrant basmati rice layered with premium ingredients",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d60e?w=800&q=80",
    count: "6 dishes",
  },
  {
    title: "Asian Dishes",
    titleJa: "アジア料理",
    description: "Pan-Asian flavors celebrating the diversity of the continent",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    count: "10 dishes",
  },
  {
    title: "Drinks & Bar",
    titleJa: "ドリンク",
    description: "Handcrafted cocktails, lassi, and curated beverages",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800&q=80",
    count: "15 drinks",
  },
  {
    title: "Desserts",
    titleJa: "デザート",
    description: "Traditional Indian sweets and modern Asian-inspired desserts",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    count: "7 desserts",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Yamamoto Keiko",
    location: "Tokorozawa, Saitama",
    rating: 5,
    review:
      "Absolutely stunning food and atmosphere. The butter chicken is the best I've had outside of India. KASIKA has become our family's favorite restaurant — we visit every month without fail.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 2,
    name: "Tanaka Hiroshi",
    location: "Tokorozawa, Saitama",
    rating: 5,
    review:
      "The lamb biryani is extraordinary — perfectly fragrant rice, tender meat, and that beautiful saffron color. The ambiance is elegant and the staff are incredibly welcoming.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    id: 3,
    name: "Sato Miyuki",
    location: "Tokyo",
    rating: 5,
    review:
      "Worth the trip from Tokyo! The membership card discount makes dinner even more special. The paneer tikka and masala chai together were absolutely divine.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: 4,
    name: "Nakamura Ryo",
    location: "Hanno, Saitama",
    rating: 5,
    review:
      "The chef clearly has mastered the art of Indian cuisine. Every dish is balanced with care and presented beautifully. KASIKA is a hidden gem in Saitama.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80",
    alt: "Butter Chicken",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
    alt: "Tandoori Chicken",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1563379091339-03246963d60e?w=600&q=80",
    alt: "Chicken Biryani",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
    alt: "Indian Curry",
    aspect: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
    alt: "Restaurant Ambience",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    alt: "Samosa Platter",
    aspect: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80",
    alt: "Mango Lassi",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    alt: "Indian Desserts",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80",
    alt: "Biryani Spread",
    aspect: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    alt: "Chicken Tikka",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
    alt: "Dal Makhani",
    aspect: "short",
  },
  {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    alt: "Bar Drinks",
    aspect: "wide",
  },
];
