import type { Lang } from "./language-context";

const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About",
    nav_gallery: "Gallery",
    nav_offers: "Offers",
    nav_contact: "Contact",
    nav_reserve: "Reserve Table",

    // ── Hero ────────────────────────────────────────────────────────────────
    hero_badge: "5% OFF · Dinner Time Only · Members",
    hero_asian_dining: "Asian Dining Indo Bar",
    hero_tagline: "Authentic Indian & Asian Dining Experience",
    hero_description:
      "Where the warmth of Indian spices meets the elegance of Japanese minimalism — a culinary journey across Asia, right here in Tokorozawa.",
    hero_view_menu: "View Menu",
    hero_reserve: "Reserve Table",
    hero_scroll: "Scroll",

    // ── Categories ──────────────────────────────────────────────────────────
    cat_eyebrow: "Our Specialties",
    cat_title: "Explore Our",
    cat_title_highlight: "Categories",
    cat_description:
      "From tandoori classics to fragrant biryanis — discover an authentic culinary journey across India and Asia.",

    // ── Menu ────────────────────────────────────────────────────────────────
    menu_eyebrow: "Our Menu",
    menu_title: "Signature",
    menu_title_highlight: "Dishes",
    menu_description:
      "Each dish is crafted with hand-selected spices imported from India, prepared fresh daily by our master chefs.",
    menu_veg: "VEG",
    menu_nonveg: "NON-VEG",
    menu_chef_pick: "★ CHEF'S PICK",
    menu_cta_text: "Interested in our full menu?",
    menu_cta_link: "Contact us for the complete menu",

    // Menu category tab labels
    tab_starters: "Starters",
    tab_curry: "Curry",
    tab_biryani: "Biryani",
    tab_rice_asian: "Rice & Asian",
    tab_set_meals: "Set Meals",
    tab_soft_drinks: "Soft Drinks",
    tab_beer_sour: "Beer & Sour",
    tab_cocktails: "Cocktails & Spirits",

    // ── Chef Special (About) ─────────────────────────────────────────────────
    chef_eyebrow: "Our Story",
    chef_title: "Crafted with",
    chef_title_highlight1: "Passion",
    chef_title_join: "Served with",
    chef_title_highlight2: "Love",
    chef_desc1:
      "KASIKA was born from a deep love of Indian culinary heritage and the desire to bring authentic flavors to Japan. Founded by Devi Lal, each recipe carries the soul of generations — spices ground by hand, sauces slow-cooked for hours, and every dish plated with intention.",
    chef_desc2:
      "We source our spices directly from India — saffron from Kashmir, cardamom from Kerala, cumin from Rajasthan. Combined with the finest local Japanese ingredients, the result is a dining experience that bridges two culinary worlds.",
    chef_stat_recipes: "Authentic\nRecipes",
    chef_stat_ingredients: "Fresh\nIngredients",
    chef_stat_years: "Years of\nExperience",
    chef_today_special: "Today's Chef Special",
    chef_special_subtitle: "Butter Chicken Set – ¥950",
    chef_special_desc:
      "Our most recommended set — creamy Butter Chicken curry with salad, your choice of Nan or Rice, and a soft drink. Rich, aromatic, and perfect for every visit.",
    chef_award_label: "Chef's Signature",
    chef_award_dish: "Butter Chicken Set",
    chef_rating: "5.0 Rating",
    chef_reviews: "200+ Reviews",
    chef_view_menu: "View Full Menu",
    chef_reserve: "Reserve Table",

    // ── Gallery ─────────────────────────────────────────────────────────────
    gallery_eyebrow: "Gallery",
    gallery_title: "A Feast for the",
    gallery_title_highlight: "Eyes",
    gallery_description:
      "Every dish tells a story. Every image captures a moment of culinary artistry from our kitchen to your table.",

    // ── Membership / Offers ─────────────────────────────────────────────────
    mem_eyebrow: "Exclusive Offer",
    mem_title: "Become a",
    mem_title_highlight: "Member",
    mem_description:
      "Join the KASIKA family and enjoy exclusive privileges every time you dine with us.",
    mem_card_label: "Members Card",
    mem_exclusive: "Members Exclusive",
    mem_dinner_only: "Dinner Time Only",
    mem_asian_dining: "Asian Dining Indo Bar",
    mem_discount: "Discount",
    mem_benefit1: "5% discount on all dinner orders",
    mem_benefit2: "Valid during dinner hours (17:30 – 22:30)",
    mem_benefit3: "Priority reservation access",
    mem_benefit4: "Exclusive seasonal menu previews",
    mem_get_card: "Get Your Members Card",

    // Party menu
    party_eyebrow: "Group Dining",
    party_title: "Party",
    party_title_highlight: "Menu",
    party_description:
      "パーティーメニュー — Perfect for groups, celebrations, and special occasions. All courses include freshly baked Nan and one choice of curry.",
    party_popular: "★ MOST POPULAR",
    party_per_person: "/ person",
    party_book_note: "Reservations required for party courses · Please call",
    party_book_note2: "to book",

    // ── Testimonials ────────────────────────────────────────────────────────
    test_eyebrow: "Testimonials",
    test_title: "What Our Guests",
    test_title_highlight: "Say",
    test_description:
      "Real stories from our beloved guests who have experienced the warmth of KASIKA.",

    // ── Reservation CTA ─────────────────────────────────────────────────────
    res_eyebrow: "Reservations",
    res_title1: "Reserve Your",
    res_title_highlight: "Dining",
    res_title2: "Experience",
    res_description:
      "Whether it's an intimate dinner for two or a celebration with family — we curate an unforgettable experience for every occasion.",
    res_lunch: "Lunch",
    res_dinner: "Dinner",
    res_closed: "Closed",
    res_book: "Book a Table",
    res_call: "Call Restaurant",

    // ── Contact ─────────────────────────────────────────────────────────────
    contact_eyebrow: "Find Us",
    contact_title: "Visit",
    contact_title_highlight: "KASIKA",
    contact_description:
      "We'd love to welcome you. Come in, sit down, and let us take you on a culinary journey.",
    contact_address: "Address",
    contact_phone: "Phone",
    contact_hours: "Hours",
    contact_reservations: "Reservations",
    contact_call_visit: "Call or visit us directly",
    contact_walkins: "Walk-ins welcome",
    contact_mobile_prefix: "Mobile:",
    contact_lunch_prefix: "Lunch:",
    contact_dinner_prefix: "Dinner:",
    contact_closed_prefix: "Closed:",
    contact_takeout_title: "Takeout & Delivery",
    contact_takeout_delivery: "Delivery available within 3km radius",
    contact_takeout_note: "Take out & delivery available during takeout hours",
    contact_takeout_hours_prefix: "Hours:",
    contact_call_now: "Call Now",
    contact_directions: "Get Directions",

    // ── Footer ──────────────────────────────────────────────────────────────
    footer_tagline:
      "A premium culinary journey through the vibrant flavors of India and Asia, in the heart of Tokorozawa, Saitama.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_hours: "Opening Hours",
    footer_lunch: "Lunch",
    footer_dinner: "Dinner",
    footer_closed: "Closed",
    footer_owner_prefix: "Owner:",
  },

  ja: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav_home: "ホーム",
    nav_menu: "メニュー",
    nav_about: "アバウト",
    nav_gallery: "ギャラリー",
    nav_offers: "オファー",
    nav_contact: "お問い合わせ",
    nav_reserve: "テーブルを予約",

    // ── Hero ────────────────────────────────────────────────────────────────
    hero_badge: "5%OFF · ディナータイムのみ · 会員限定",
    hero_asian_dining: "アジアンダイニングインドバー",
    hero_tagline: "本格インド＆アジア料理体験",
    hero_description:
      "インドスパイスの温かみと日本の上品さが出会う場所 — 所沢でアジア全土の料理の旅をお楽しみください。",
    hero_view_menu: "メニューを見る",
    hero_reserve: "テーブルを予約",
    hero_scroll: "スクロール",

    // ── Categories ──────────────────────────────────────────────────────────
    cat_eyebrow: "当店の専門料理",
    cat_title: "カテゴリを",
    cat_title_highlight: "探る",
    cat_description:
      "タンドーリの定番からアロマティックなビリヤニまで — インドとアジアにわたる本格的な料理の旅をお楽しみください。",

    // ── Menu ────────────────────────────────────────────────────────────────
    menu_eyebrow: "メニュー",
    menu_title: "シグネチャー",
    menu_title_highlight: "料理",
    menu_description:
      "厳選されたインド直輸入スパイスを使い、毎日マスターシェフが新鮮に調理しています。",
    menu_veg: "ベジ",
    menu_nonveg: "非ベジ",
    menu_chef_pick: "★ シェフのおすすめ",
    menu_cta_text: "完全なメニューをご覧になりたいですか？",
    menu_cta_link: "完全なメニューはお問い合わせください",

    // Menu category tab labels
    tab_starters: "前菜",
    tab_curry: "カレー",
    tab_biryani: "ビリヤニ",
    tab_rice_asian: "ライス＆アジア料理",
    tab_set_meals: "セットメニュー",
    tab_soft_drinks: "ソフトドリンク",
    tab_beer_sour: "ビール＆サワー",
    tab_cocktails: "カクテル＆スピリッツ",

    // ── Chef Special (About) ─────────────────────────────────────────────────
    chef_eyebrow: "私たちのストーリー",
    chef_title: "情熱を込めて",
    chef_title_highlight1: "作り",
    chef_title_join: "愛を込めて",
    chef_title_highlight2: "お届け",
    chef_desc1:
      "KASIKAはインド料理の伝統への深い愛と、本格的な味を日本にお届けしたいという思いから生まれました。デビ・ラルが創業し、各レシピには世代を超えた魂が宿っています — 手挽きのスパイス、時間をかけて煮込んだソース、そして一皿一皿に込めた想い。",
    chef_desc2:
      "スパイスはインドから直接仕入れています — カシミールのサフラン、ケーララのカルダモン、ラジャスタンのクミン。最高の地元日本食材と組み合わせることで、二つの料理文化を結ぶダイニング体験が生まれます。",
    chef_stat_recipes: "本格\nレシピ",
    chef_stat_ingredients: "新鮮な\n食材",
    chef_stat_years: "年の\n経験",
    chef_today_special: "本日のシェフスペシャル",
    chef_special_subtitle: "バターチキンセット – ¥950",
    chef_special_desc:
      "最もおすすめのセットです — クリーミーなバターチキンカレー、サラダ、ナンまたはライスのお好きな方、ソフトドリンク付き。豊かでアロマティック、毎回のご来店に最適です。",
    chef_award_label: "シェフのシグネチャー",
    chef_award_dish: "バターチキンセット",
    chef_rating: "5.0 評価",
    chef_reviews: "200件以上のレビュー",
    chef_view_menu: "フルメニューを見る",
    chef_reserve: "テーブルを予約",

    // ── Gallery ─────────────────────────────────────────────────────────────
    gallery_eyebrow: "ギャラリー",
    gallery_title: "目で楽しむ",
    gallery_title_highlight: "ご馳走",
    gallery_description:
      "すべての料理が物語を語ります。キッチンからテーブルへ、料理芸術の一瞬を捉えた写真をお楽しみください。",

    // ── Membership / Offers ─────────────────────────────────────────────────
    mem_eyebrow: "限定オファー",
    mem_title: "会員に",
    mem_title_highlight: "なる",
    mem_description:
      "KASIKAファミリーに参加して、ダイニングのたびに限定特典をお楽しみください。",
    mem_card_label: "会員カード",
    mem_exclusive: "会員限定",
    mem_dinner_only: "ディナータイムのみ",
    mem_asian_dining: "アジアンダイニングインドバー",
    mem_discount: "割引",
    mem_benefit1: "すべてのディナーオーダーに5%割引",
    mem_benefit2: "ディナータイム有効 (17:30 – 22:30)",
    mem_benefit3: "優先予約アクセス",
    mem_benefit4: "限定季節メニューのプレビュー",
    mem_get_card: "会員カードを取得",

    // Party menu
    party_eyebrow: "グループダイニング",
    party_title: "パーティー",
    party_title_highlight: "メニュー",
    party_description:
      "パーティーメニュー — グループ、お祝い、特別な場合に最適です。すべてのコースに焼きたてのナンとカレー1種が含まれます。",
    party_popular: "★ 人気ナンバーワン",
    party_per_person: "/ 人",
    party_book_note: "パーティーコースはご予約が必要です · ご予約はお電話で",
    party_book_note2: "までお電話ください",

    // ── Testimonials ────────────────────────────────────────────────────────
    test_eyebrow: "お客様の声",
    test_title: "お客様が",
    test_title_highlight: "語る",
    test_description:
      "KASIKAを体験された大切なお客様の本当の声です。",

    // ── Reservation CTA ─────────────────────────────────────────────────────
    res_eyebrow: "ご予約",
    res_title1: "ダイニング",
    res_title_highlight: "体験",
    res_title2: "をご予約",
    res_description:
      "二人だけの親密なディナーでも、家族とのお祝いでも — あらゆる機会に忘れられない体験をご用意します。",
    res_lunch: "ランチ",
    res_dinner: "ディナー",
    res_closed: "定休日",
    res_book: "テーブルを予約",
    res_call: "レストランに電話",

    // ── Contact ─────────────────────────────────────────────────────────────
    contact_eyebrow: "アクセス",
    contact_title: "KASIKAへ",
    contact_title_highlight: "お越しください",
    contact_description:
      "ぜひお越しください。座ってくつろぎ、料理の旅へとご案内します。",
    contact_address: "住所",
    contact_phone: "電話",
    contact_hours: "営業時間",
    contact_reservations: "ご予約",
    contact_call_visit: "直接お電話またはご来店ください",
    contact_walkins: "ウォークインも歓迎",
    contact_mobile_prefix: "携帯:",
    contact_lunch_prefix: "ランチ:",
    contact_dinner_prefix: "ディナー:",
    contact_closed_prefix: "定休日:",
    contact_takeout_title: "テイクアウト＆デリバリー",
    contact_takeout_delivery: "3km圏内デリバリー対応",
    contact_takeout_note: "テイクアウト時間内にテイクアウト＆デリバリーをご利用いただけます",
    contact_takeout_hours_prefix: "営業時間:",
    contact_call_now: "今すぐ電話",
    contact_directions: "道順を見る",

    // ── Footer ──────────────────────────────────────────────────────────────
    footer_tagline:
      "所沢の中心で、インドとアジアの鮮やかな料理フレーバーを巡るプレミアムな食の旅。",
    footer_quick_links: "クイックリンク",
    footer_contact: "お問い合わせ",
    footer_hours: "営業時間",
    footer_lunch: "ランチ",
    footer_dinner: "ディナー",
    footer_closed: "定休日",
    footer_owner_prefix: "オーナー:",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function useT(lang: Lang) {
  return translations[lang];
}

// Maps MENU_CATEGORIES array entries to their translation keys
export const CATEGORY_TAB_KEY: Record<string, TranslationKey> = {
  "Starters":           "tab_starters",
  "Curry":              "tab_curry",
  "Biryani":            "tab_biryani",
  "Rice & Asian":       "tab_rice_asian",
  "Set Meals":          "tab_set_meals",
  "Soft Drinks":        "tab_soft_drinks",
  "Beer & Sour":        "tab_beer_sour",
  "Cocktails & Spirits":"tab_cocktails",
};
