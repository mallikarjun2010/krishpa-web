
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-primary mb-6 text-center">
            Our Story
          </h1>
          
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f" 
              alt="Family preparing pickles" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-6"
            />
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">
                Our Process
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every jar of Krishpa pickle is still handcrafted in small batches to ensure quality and 
                consistency. We follow traditional methods that have been refined over generations:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>Ingredients are hand-selected and inspected for quality</li>
                <li>Spices are ground fresh for each batch</li>
                <li>Natural fermentation and curing processes are followed</li>
                <li>Each batch is taste-tested before packaging</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-playfair text-xl font-bold text-primary mb-4">
                Our Philosophy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Krishpa, we believe food is not just to fill your stomach. 
                It helps keep our culture alive and brings people closer. 
                Our pickles are made with the same love, care, and attention that goes into every jar.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                We're committed to using only the finest ingredients. No artificial preservatives, colors, or flavors 
                are ever used in our products.
              </p>
            </div>
          </div>
          
          
          
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
              Join the Krishpa Family
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're grateful to all our customers who have made Krishpa a part of their dining tables 
              and family gatherings. We invite you to try our pickles and experience the authentic 
              taste of Telugu tradition.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
