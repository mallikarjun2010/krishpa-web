import { Link } from "react-router-dom";
import { LucideSalad, Beef, UtensilsCrossed } from "lucide-react";
import { FaPepperHot } from "react-icons/fa";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Vegetarian Pickles",
      description: "Traditional vegetarian pickles made with fresh vegetables and spices",
      image: "https://i.pinimg.com/736x/a5/d5/50/a5d550c56f29e27d05339c4f1877653c.jpg",
      icon: <LucideSalad className="w-6 h-6" />,
      link: "/shop?category=veg"
    },
    {
      id: 2,
      name: "Non-Vegetarian",
      description: "Premium meat and seafood-based pickles including chicken, mutton, fish and prawns",
      image: "https://i.pinimg.com/736x/3d/47/3f/3d473f0ae5ffa3daadf5625f575a957d.jpg",
      icon: <Beef className="w-6 h-6" />,
      link: "/shop?category=nonveg"
    },
    {
      id: 3,
      name: "Combo Packs",
      description: "Special combination packs of our best-selling pickles",
      image: "https://i.pinimg.com/736x/f1/f5/48/f1f54863327de0cf2a08a9e113a57c5b.jpg",
      icon: <UtensilsCrossed className="w-6 h-6" />,
      link: "/shop?category=combo"
    },
    {
      id: 4,
      name: "Spices",
      description: "Authentic South Indian spice mixes and powders",
      image: "https://i.pinimg.com/736x/4a/de/51/4ade51dcb429f56a8bc394df4f882ebf.jpg",
      icon: <FaPepperHot className="w-6 h-6" />,
      link: "/shop?category=spices"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-fr gap-6">
      {/* Vegetarian */}
      <Link
        to={categories[0].link}
        className="relative overflow-hidden rounded-2xl group md:row-span-2 transition-transform hover:scale-[1.02] duration-300"
      >
        <img
          src={categories[0].image}
          alt={categories[0].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 text-white mb-2">
            {categories[0].icon}
            <h3 className="text-2xl font-playfair font-bold">{categories[0].name}</h3>
          </div>
          <p className="text-white/90">{categories[0].description}</p>
        </div>
      </Link>

      {/* Non-Vegetarian */}
      <Link
        to={categories[1].link}
        className="relative overflow-hidden rounded-2xl group md:row-span-2 transition-transform hover:scale-[1.02] duration-300"
      >
        <img
          src={categories[1].image}
          alt={categories[1].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 text-white mb-2">
            {categories[1].icon}
            <h3 className="text-2xl font-playfair font-bold">{categories[1].name}</h3>
          </div>
          <p className="text-white/90">{categories[1].description}</p>
        </div>
      </Link>

      {/* Combo Packs */}
      <Link
        to={categories[2].link}
        className="relative overflow-hidden rounded-2xl group h-[290px] transition-transform hover:scale-[1.02] duration-300"
      >
        <img
          src={categories[2].image}
          alt={categories[2].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 text-white mb-1">
            {categories[2].icon}
            <h3 className="text-xl font-playfair font-bold">{categories[2].name}</h3>
          </div>
          <p className="text-white/90 text-sm">{categories[2].description}</p>
        </div>
      </Link>

      {/* Spices */}
      <Link
        to={categories[3].link}
        className="relative overflow-hidden rounded-2xl group h-[290px] transition-transform hover:scale-[1.02] duration-300"
      >
        <img
          src={categories[3].image}
          alt={categories[3].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 text-white mb-1">
            {categories[3].icon}
            <h3 className="text-xl font-playfair font-bold">{categories[3].name}</h3>
          </div>
          <p className="text-white/90 text-sm">{categories[3].description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
