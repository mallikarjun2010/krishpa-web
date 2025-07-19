import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const International = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
          International Orders
        </h1>
        <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto text-base sm:text-lg">
          Missing the authentic taste of Telugu pickles abroad? We ship worldwide to bring a taste of 
          home to NRIs and pickle enthusiasts around the globe.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Section 1: Hero Image + Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://i.pinimg.com/736x/21/fa/bc/21fabcb92748f9ef57592c1643b3a8ad.jpg" 
                alt="International Shipping" 
                className="rounded-lg shadow-md w-full h-64 sm:h-full object-cover"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4">
                For Our Global Customers
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                We know how much you miss authentic Telugu pickles when you're living abroad. 
                That's why we’ve made our international shipping easy and safe. So you can enjoy that homemade taste, wherever you are.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
                Our special export-ready packaging ensures that the pickles maintain their freshness 
                and flavor during transit. We comply with all international food safety standards 
                and shipping regulations.
              </p>
              <div className="mt-4">
                <Link to="/shop">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Browse Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Section 2: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Export-Ready Packaging",
                icon: (
                  <svg className="h-12 w-12 text-amber-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                desc: "Our international orders are packed in specially designed containers that prevent leakage and breakage during long shipping journeys."
              },
              {
                title: "Food Safety Compliant",
                icon: (
                  <svg className="h-12 w-12 text-amber-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                desc: "All our products comply with international food safety standards and come with appropriate labeling."
              },
              
            ].map(({ title, icon, desc }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm text-center sm:text-left">
                {icon}
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">{title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
              </div>
            ))}
          </div>

          {/* Section 3: Countries We Ship To */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6 text-center">
              Countries We Ship To
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-2">North America</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>United States</li>
                  <li>Canada</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Europe</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>United Kingdom</li>
                  <li>Germany</li>
                  <li>France</li>
                  <li>Italy</li>
                  <li>Spain</li>
                  <li>Netherlands</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Asia Pacific</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Australia</li>
                  <li>Singapore</li>
                  <li>Malaysia</li>
                  <li>New Zealand</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Middle East</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>United Arab Emirates</li>
                  <li>Saudi Arabia</li>
                  <li>Qatar</li>
                  <li>Kuwait</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-center italic text-sm sm:text-base">
              Don't see your country listed? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to check if we can arrange shipping.
            </p>
          </div>

         
       

          {/* Section 5: CTA */}
          <div className="text-center">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-6">
              Ready to Order?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Browse our collection of authentic Telugu pickles and place your order today. 
              A taste of home is just a few clicks away!
            </p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default International;
