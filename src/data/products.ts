
export interface ProductPricing {
  weight: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  pricing: ProductPricing[];
  description: string;
  longDescription: string;
  ingredients: string[];
  spiceLevel: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
  shelfLife: string;
  servingSuggestions: string[];
  image: string;
  featured: boolean;
  category: 'veg' | 'nonveg' | 'combo'|'spices';
}

const products: Product[] = [
  {
    id: 1,
    name: "Avakaya Pickle",
    pricing: [
      { weight: "250g", price: 199 },
      { weight: "500g", price: 299 },
      { weight: "1kg", price: 549 }
    ],
    description: "Traditional raw mango pickle with mustard and chili. A Telugu household favorite.",
    longDescription: "Our signature Avakaya is made from handpicked raw mangoes, sun-dried red chilies, and premium mustard, following an authentic family recipe that has been passed down through generations. Each jar is carefully prepared to ensure that perfect balance of tangy, spicy flavors that makes Avakaya the king of Telugu pickles.",
    ingredients: ["Raw Mangoes", "Mustard Seeds", "Chili Powder", "Sesame Oil", "Fenugreek Seeds", "Salt", "Turmeric"],
    spiceLevel: "Hot",
    shelfLife: "12 months",
    servingSuggestions: ["Mix with hot rice and ghee", "Serve with curd rice", "Pair with dosa or idli"],
    image: "/images/mango.jpg",
    featured: true,
    category: "veg"
  },
  {
    id: 2,
    name: "Gongura Pickle",
    pricing: [
      { weight: "250g", price: 249 },
      { weight: "500g", price: 349 },
      { weight: "1kg", price: 649 }
    ],
    description: "Tangy sorrel leaves pickle with a perfect balance of spices that complements rice perfectly.",
    longDescription: "Our Gongura pickle is a true Andhra delicacy made from fresh sorrel leaves harvested at peak season. The leaves are hand-sorted, chopped, and mixed with specially ground spices to create that distinctive tangy flavor. This pickle is the perfect accompaniment to plain rice with a dollop of ghee or with hot rotis.",
    ingredients: ["Gongura Leaves (Sorrel)", "Red Chilies", "Garlic", "Mustard Seeds", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Medium",
    shelfLife: "12 months",
    servingSuggestions: ["Mix with steamed rice", "Spread on dosa", "Serve with plain paratha"],
    image: "/images/gonguraa.jpg",
    featured: true,
    category: "veg"
  },
  {
    id: 3,
    name: "Tomato Pickle",
    pricing: [
      { weight: "250g", price: 149 },
      { weight: "500g", price: 249 },
      { weight: "1kg", price: 449 }
    ],
    description: "Sweet and tangy tomato pickle made with ripe tomatoes and aromatic spices.",
    longDescription: "Our Tomato pickle combines the tanginess of vine-ripened tomatoes with the sweetness of jaggery and warmth of carefully selected spices. Slow-cooked to perfection, this pickle delivers a burst of flavors in every bite and pairs wonderfully with a variety of Indian breads and rice dishes.",
    ingredients: ["Ripe Tomatoes", "Jaggery", "Red Chilies", "Mustard Seeds", "Fenugreek Seeds", "Sesame Oil", "Salt"],
    spiceLevel: "Mild",
    shelfLife: "10 months",
    servingSuggestions: ["Pair with chapati or paratha", "Serve with curd rice", "Excellent with plain dosa"],
    image: "/images/tomato.jpg",
    featured: true,
    category: "veg"
  },
  {
    id: 4,
    name: "Lemon Pickle",
    pricing: [
      { weight: "250g", price: 199 },
      { weight: "500g", price: 299 },
      { weight: "1kg", price: 549 }
    ],
    description: "Zesty and tangy lemon pickle that adds a burst of flavor to any meal.",
    longDescription: "Our Lemon pickle features organically grown lemons that are cured in salt and then mixed with aromatic spices. The pickling process allows the lemons to develop complex flavors while maintaining their zesty character. This pickle is a refreshing accompaniment to many meals and helps aid digestion.",
    ingredients: ["Lemons", "Salt", "Red Chili Powder", "Mustard Seeds", "Fenugreek Seeds", "Turmeric", "Asafoetida"],
    spiceLevel: "Medium",
    shelfLife: "18 months",
    servingSuggestions: ["Perfect with biryani", "Great with rice and dal", "Enjoyable with plain yogurt"],
    image: "/images/lemon.jpg",
    featured: true,
    category: "veg"
  },
  {
    id: 5,
    name: "Green Chili Pickle",
    pricing: [
      { weight: "250g", price: 179 },
      { weight: "500g", price: 279 },
      { weight: "1kg", price: 499 }
    ],
    description: "Fiery green chili pickle for those who love extra heat in their meals.",
    longDescription: "This specialty Green Chili Pickle is crafted for those who appreciate heat. Made with fresh green chilies and a special blend of spices, it delivers a powerful punch of flavor and spice that elevates simple meals. The chilies are handpicked at just the right stage of maturity to ensure optimal heat and flavor.",
    ingredients: ["Green Chilies", "Mustard Seeds", "Garlic", "Ginger", "Sesame Oil", "Salt", "Turmeric", "Fenugreek Seeds"],
    spiceLevel: "Extra Hot",
    shelfLife: "12 months",
    servingSuggestions: ["Use sparingly with plain rice", "Mix with yogurt rice", "Add to sandwiches for heat"],
    image: "/images/pandu mirchi.jpg",
    featured: false,
    category: "veg"
  },
  {
    id: 6,
    name: "Tamarind Pickle",
    pricing: [
      { weight: "250g", price: 169 },
      { weight: "500g", price: 269 },
      { weight: "1kg", price: 479 }
    ],
    description: "Sweet and sour tamarind pickle with jaggery and mild spices. Perfect for those who prefer less heat.",
    longDescription: "Our Tamarind Pickle blends the natural sourness of tamarind with the sweetness of jaggery, creating a perfect balance of flavors. This pickle is milder than most, making it suitable for those who enjoy the tangy taste but prefer less spicy food. It's a wonderful addition to simple meals and helps stimulate the appetite.",
    ingredients: ["Tamarind", "Jaggery", "Mild Red Chilies", "Mustard Seeds", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Mild",
    shelfLife: "12 months",
    servingSuggestions: ["Great with plain rice", "Perfect with South Indian breakfast items", "Pair with rotis"],
    image: "/images/fish.jpg",
    featured: false,
    category: "veg"
  },
  {
    id: 7,
    name: "Chicken Pickle",
    pricing: [
      { weight: "250g", price: 299 },
      { weight: "500g", price: 549 },
      { weight: "1kg", price: 999 }
    ],
    description: "Spicy chicken pickle made with tender pieces of chicken and a blend of aromatic spices.",
    longDescription: "Our Chicken Pickle features succulent pieces of chicken marinated in a traditional blend of spices and slow-cooked to perfection. The chicken is sourced from local farms and prepared with care to ensure maximum flavor. This pickle adds a delightful protein-rich kick to any meal.",
    ingredients: ["Chicken", "Red Chilies", "Garlic", "Ginger", "Mustard Seeds", "Sesame Oil", "Black Pepper", "Salt", "Turmeric"],
    spiceLevel: "Hot",
    shelfLife: "6 months",
    servingSuggestions: ["Perfect with plain rice", "Great with parathas", "Enjoy with dosa"],
    image: "/images/chicken.jpg",
    featured: true,
    category: "nonveg"
  },
  {
    id: 8,
    name: "Boneless Chicken Pickle",
    pricing: [
      { weight: "250g", price: 349 },
      { weight: "500g", price: 649 },
      { weight: "1kg", price: 1199 }
    ],
    description: "Premium boneless chicken pickle with tender pieces in a rich, spicy gravy.",
    longDescription: "Our Boneless Chicken Pickle is made with carefully selected boneless chicken pieces that are marinated in a special blend of spices and slow-cooked to achieve the perfect texture and flavor. The absence of bones makes it convenient to eat while enjoying the rich, spicy taste traditional to Telugu cuisine.",
    ingredients: ["Boneless Chicken", "Red Chilies", "Ginger", "Garlic", "Mustard Seeds", "Fenugreek Seeds", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Hot",
    shelfLife: "6 months",
    servingSuggestions: ["Mix with steamed rice", "Great with rotis or parathas", "Perfect as a sandwich filling"],
    image: "/images/chicken.jpg",
    featured: false,
    category: "nonveg"
  },
  {
    id: 9,
    name: "Mutton Pickle",
    pricing: [
      { weight: "250g", price: 399 },
      { weight: "500g", price: 749 },
      { weight: "1kg", price: 1399 }
    ],
    description: "Rich and flavorful mutton pickle made with tender goat meat and authentic spices.",
    longDescription: "Our Mutton Pickle is a premium offering featuring tender goat meat cooked with traditional spices. The meat is carefully selected and slow-cooked to ensure that it absorbs all the flavors while maintaining its tenderness. This pickle is a protein-rich delicacy that elevates the taste of simple meals.",
    ingredients: ["Goat Meat", "Red Chilies", "Garlic", "Ginger", "Mustard Seeds", "Coriander Seeds", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Hot",
    shelfLife: "6 months",
    servingSuggestions: ["Perfect with plain rice and ghee", "Excellent with hot parathas", "Enjoy with dosa or idli"],
    image: "/images/mutton.jpg",
    featured: true,
    category: "nonveg"
  },
  {
    id: 10,
    name: "Boneless Mutton Pickle",
    pricing: [
      { weight: "250g", price: 449 },
      { weight: "500g", price: 849 },
      { weight: "1kg", price: 1599 }
    ],
    description: "Premium boneless mutton pickle with tender pieces marinated in special spices.",
    longDescription: "Our Boneless Mutton Pickle features carefully selected boneless pieces of goat meat that are marinated in a special blend of spices and slow-cooked to perfection. The boneless preparation makes it easier to enjoy the rich, spicy flavors without having to navigate around bones.",
    ingredients: ["Boneless Goat Meat", "Red Chilies", "Ginger", "Garlic", "Mustard Seeds", "Fennel Seeds", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Extra Hot",
    shelfLife: "6 months",
    servingSuggestions: ["Mix with hot steamed rice", "Perfect with rotis or naan", "Great as a side with biryani"],
    image: "/images/mutton boneless.jpg",
    featured: false,
    category: "nonveg"
  },
  {
    id: 11,
    name: "Prawn Pickle",
    pricing: [
      { weight: "250g", price: 379 },
      { weight: "500g", price: 699 },
      { weight: "1kg", price: 1299 }
    ],
    description: "Coastal specialty prawn pickle with succulent prawns in a tangy, spicy marinade.",
    longDescription: "Our Prawn Pickle is a coastal delicacy featuring fresh, succulent prawns carefully cleaned and cooked with a special blend of spices. The prawns are sourced from sustainable fisheries and prepared in small batches to ensure quality and flavor. This pickle brings the taste of the coast to your table.",
    ingredients: ["Prawns", "Red Chilies", "Ginger", "Garlic", "Mustard Seeds", "Curry Leaves", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Medium",
    shelfLife: "4 months",
    servingSuggestions: ["Excellent with steamed rice", "Great with dosa or idli", "Perfect as a side with pulao"],
    image: "/images/prawns.jpg",
    featured: false,
    category: "nonveg"
  },
  {
    id: 12,
    name: "Fish Pickle",
    pricing: [
      { weight: "250g", price: 349 },
      { weight: "500g", price: 649 },
      { weight: "1kg", price: 1199 }
    ],
    description: "Traditional fish pickle made with boneless fish pieces in a spicy, tangy gravy.",
    longDescription: "Our Fish Pickle is made with boneless pieces of carefully selected fish that are marinated in a special blend of spices and preserved in oil. The fish is sourced from local waters and prepared using traditional methods to ensure authentic flavor. This pickle is a protein-rich addition to simple meals.",
    ingredients: ["Boneless Fish", "Red Chilies", "Ginger", "Garlic", "Mustard Seeds", "Fenugreek Seeds", "Sesame Oil", "Salt", "Turmeric"],
    spiceLevel: "Medium",
    shelfLife: "4 months",
    servingSuggestions: ["Perfect with plain rice", "Great with rotis or parathas", "Enjoy with dosa or idli"],
     image: "/images/fish.jpg",
    featured: true,
    category: "nonveg"
  },

  {
    id: 15,
    name: "Veg & Non-Veg Combo Pack",
    pricing: [
      { weight: "500g (4 x 125g)", price: 499 },
      { weight: "1kg (4 x 250g)", price: 899 }
    ],
    description: "Special combo pack featuring our best-selling vegetarian and non-vegetarian pickles.",
    longDescription: "Our Veg & Non-Veg Combo Pack brings together the best of both worlds. This carefully curated selection includes our popular Avakaya, Gongura, Chicken, and Fish pickles in convenient smaller jars. It's perfect for those who want to experience different flavors or as a thoughtful gift for pickle enthusiasts.",
    ingredients: ["Various ingredients from included pickles"],
    spiceLevel: "Medium",
    shelfLife: "6 months",
    servingSuggestions: ["Perfect for family meals", "Great for picnics and gatherings", "Ideal as a gift"],
    image: "/images/fish.jpg",
    featured: true,
    category: "combo"
  },
  
  {
  id: 13,
  name: "Mirchi Powder",
  pricing: [
    { weight: "100g", price: 120 },
    { weight: "250g", price: 280 },
    { weight: "500g", price: 520 }
  ],
  description: "Natural red chili powder made from sun-dried, hand-picked red chilies.",
  longDescription: "Our Mirchi Powder is made from carefully selected, sun-dried red chilies that are ground fresh to retain their natural heat and flavor. No additives or preservatives are used, making it a pure and natural spice to enhance your dishes with authentic taste and aroma.",
  ingredients: ["Sun-dried Red Chilies"],
  spiceLevel: "Hot",
  shelfLife: "12 months",
  servingSuggestions: ["Use in curries and gravies", "Add to chutneys", "Sprinkle on snacks for extra spice"],
  image: "/images/mirchi 3.jpg",
  featured: false,
  category: "spices"
},
{
  id: 14,
  name: "Turmeric Powder",
  pricing: [
    { weight: "100g", price: 100 },
    { weight: "250g", price: 230 },
    { weight: "500g", price: 430 }
  ],
  description: "Pure and natural turmeric powder with vibrant color and earthy aroma.",
  longDescription: "Our Turmeric Powder is made from high-quality turmeric roots that are carefully cleaned, dried, and ground into a fine powder. It is completely natural without any additives, perfect for adding color, flavor, and health benefits to your cooking and daily routine.",
  ingredients: ["Natural Turmeric Root"],
  spiceLevel: "Mild",
  shelfLife: "12 months",
  servingSuggestions: ["Essential for curries and dals", "Use in golden milk", "Great for marinades and pickles"],
  image: "/images/turmeric.jpg",
  featured: false,
  category: "spices"
},


 
];

export default products;
