import { useState, useEffect } from "react";

interface ProductGalleryProps {
  image: string;
  name: string;
  productId: number;
}

const ProductGallery = ({ image, name, productId }: ProductGalleryProps) => {
  const getProductImages = (id: number, mainImage: string) => {
    const baseImages = [mainImage];
    switch (id) {
      case 1:
        baseImages.push("/altimg/mango.jpg");
        break;
      case 2:
        baseImages.push(
          "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
          "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        );
        break;
      case 3:
        baseImages.push(
          "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
          "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
        );
        break;
      case 4:
        baseImages.push(
          "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
          "https://images.unsplash.com/photo-1441057206919-63d19fac2369"
        );
        break;
      case 5:
        baseImages.push(
          "https://images.unsplash.com/photo-1501286353178-1ec881214838",
          "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
        );
        break;
      default:
        baseImages.push(
          "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
          "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
        );
    }
    return baseImages;
  };

  const images = getProductImages(productId, image);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isHovered, setIsHovered] = useState(false);

  // Reset selectedImage when productId or image changes
  useEffect(() => {
    setSelectedImage(images[0]);
  }, [productId, image]); // watch for changes

  return (
    <div className="md:w-1/2 p-4">
      <div
        className="mb-4 relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={selectedImage}
          alt={name}
          className={`w-full aspect-square object-cover transition-all duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {isHovered && <div className="absolute inset-0 bg-black bg-opacity-20"></div>}
      </div>

      {/* Thumbnail images */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 ${
              selectedImage === img ? "border-[#5C2A12]" : "border-gray-200"
            } rounded-md overflow-hidden w-20 h-20`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Bulk Orders & WhatsApp CTA */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold font-playfair mb-2 text-[#5C2A12]">
          For Bulk Orders & Customization
        </h3>
        <a
          href="https://wa.me/919347445411"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-700 transition-colors w-1/3"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-4 w-4 mr-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.916 1.416 7.5 3.776 10.28L1.304 32l5.892-2.44c2.636 1.92 5.876 3.044 9.372 3.044 8.824 0 15.996-7.176 15.996-16s-7.172-16-15.996-16zM25.252 22.508c-.388 1.096-1.924 2.008-3.148 2.272-.836.172-1.928.308-5.604-1.204-4.708-1.932-7.732-6.676-7.964-6.984-.224-.308-1.84-2.456-1.84-4.684 0-2.228 1.144-3.32 1.576-3.784.344-.368.756-.532 1.012-.532.252 0 .5.004.716.016.624.32.944.064 1.368 1.064.52 1.228 1.28 3.124 1.392 3.352.112.228.188.5.036.796-.14.288-.264.412-.48.652-.22.24-.42.424-.64.684-.196.228-.42.472-.172.9.252.424.112.776 1.676 3.388 1.68 2.156 3.052 2.848 3.496 3.164.444.32.708.268.972.16.26-.1.576-.404 1.092-.824.344-.288.78-.424 1.24-.272.464.14 2.92 1.376 3.42 1.628.5.248.836.38.956.584.12.212.12 1.208-.268 2.372z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductGallery;
