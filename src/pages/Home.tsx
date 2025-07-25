
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import ReviewForm from "@/components/ReviewForm";
import Categories from "@/components/Categories";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import products from "@/data/products";
import testimonials, { fetchTestimonials, editTestimonial, deleteTestimonial } from "@/data/testimonials";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { UtensilsCrossed, ChefHat, Sprout } from "lucide-react";

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);
  const [refreshTestimonials, setRefreshTestimonials] = useState(0);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  
  // Initially show only 4 testimonials
  const initialTestimonialsCount = 4;
  const displayedTestimonials = showAllTestimonials 
    ? testimonials 
    : testimonials.slice(0, initialTestimonialsCount);
  
  // Force re-render of testimonials when a new one is added
  const handleReviewSubmitted = () => {
    setRefreshTestimonials(prev => prev + 1);
  };
  
  // Fetch testimonials on component mount
  useEffect(() => {
    const loadTestimonials = async () => {
      setIsLoading(true);
      await fetchTestimonials();
      setIsLoading(false);
    };
    
    loadTestimonials();
  }, [refreshTestimonials]);
  
  // Handle testimonial edit
  const handleEditTestimonial = async (id: string, quote: string) => {
    const success = await editTestimonial(id, quote);
    if (success) {
      setRefreshTestimonials(prev => prev + 1);
    } else {
      toast({
        title: "Error",
        description: "Failed to update your review. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  // Handle testimonial delete
  const handleDeleteTestimonial = async (id: string) => {
    const success = await deleteTestimonial(id);
    if (success) {
      setRefreshTestimonials(prev => prev + 1);
    } else {
      toast({
        title: "Error",
        description: "Failed to delete your review. Please try again.",
        variant: "destructive",
      });
    }
  };

  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-amber-50">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              A Taste of Tradition in Every Bite!
            </h1>
            <p className="text-gray-700 mb-8 text-lg">
              Authentic Telugu-style pickles made with traditional recipes from Andhra and Telangana.
              Handcrafted with love and the finest ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button className="bg-primary hover:bg-primary/90 text-white py-2 px-6">
                  Explore Our Pickles
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/images/home.jpg" alt="Assorted pickles in jars" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-50/80 to-transparent"></div>
      </section>
      
      

      
     <section className="bg-gradient-to-b from-[#fff9f3] to-white py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl md:text-4xl font-playfair font-bold text-primary text-center mb-4">
      Our Promise to You
    </h2>
    <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
      Every jar from Krishpa carries our heart. We make it the way our mothers did — clean, honest, and full of flavor.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Authentic Telugu Taste */}
      <div className="bg-white/60 backdrop-blur-md border border-yellow-100 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-5 rounded-full shadow-lg">
            <UtensilsCrossed size={44} strokeWidth={1.5} className="text-[#9c4221]" />
          </div>
        </div>
        <h3 className="text-2xl font-playfair font-semibold text-primary text-center mb-4">
          Authentic Telugu Taste
        </h3>
        <p className="text-gray-700 text-center text-[16px] leading-relaxed">
          Passed down through generations, our pickles capture the soul of Andhra-Telangana kitchens with no shortcuts.
        </p>
      </div>

      {/* Homemade & Hygienic */}
      <div className="bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-5 rounded-full shadow-lg">
            <ChefHat size={44} strokeWidth={1.5} className="text-[#276749]" />
          </div>
        </div>
        <h3 className="text-2xl font-playfair font-semibold text-green-700 text-center mb-4">
          Homemade & Hygienic
        </h3>
        <p className="text-gray-700 text-center text-[16px] leading-relaxed">
          We prepare everything at home with clean hands, clean hearts, and a lot of love — just like family should.
        </p>
      </div>

      {/* No Preservatives */}
      <div className="bg-white/60 backdrop-blur-md border border-yellow-100 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-5 rounded-full shadow-lg">
            <Sprout size={44} strokeWidth={1.5} className="text-[#b7791f]" />
          </div>
        </div>
        <h3 className="text-2xl font-playfair font-semibold text-yellow-700 text-center mb-4">
          No Preservatives
        </h3>
        <p className="text-gray-700 text-center text-[16px] leading-relaxed">
          No chemicals, no shortcuts. Only nature’s own ingredients — oil, spices, and tradition.
        </p>
      </div>
    </div>
  </div>
</section>

        
        {/* Categories Section */}
      <section className="bg-[#fff8f1] py-16">
        <div className="container mx-auto px-8">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-2 text-center">
            Browse by Category
          </h2>
          <p className="text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Explore our diverse collection of handcrafted pickles
          </p>
          <Categories />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-2 text-center">
            Our Signature Pickles
          </h2>
          <p className="text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Handcrafted in small batches using traditional methods and the finest ingredients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-2 text-center">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            We're proud to bring the authentic taste of Telugu cuisine to homes around the world
          </p>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <p className="text-center text-gray-500 py-12">No reviews yet. Be the first to share your experience!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedTestimonials.map(testimonial => (
                <TestimonialCard 
                  key={`${testimonial.id}-${refreshTestimonials}`} 
                  {...testimonial}
                  onEdit={handleEditTestimonial}
                  onDelete={handleDeleteTestimonial}
                />
              ))}
            </div>
          )}
          
          {testimonials.length > initialTestimonialsCount && (
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              >
                {showAllTestimonials ? "Show Less" : "More Reviews"}
              </Button>
            </div>
          )}
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  Share Your Review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-white py-16 animate-fade-in bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6 text-secondary-foreground">
            Bring Home the Taste of Tradition
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-secondary-foreground">
            From our family's kitchen to your table - experience the authentic flavors of Telugu cuisine with Krishpa Homemade Pickles.
          </p>
          <Link to="/shop">
            <Button className="text-white py-2 px-8 text-lg transition-all duration-300 hover:scale-105 bg-[#8b4513]">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Home;
