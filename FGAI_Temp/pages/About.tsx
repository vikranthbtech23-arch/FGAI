import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Introduction */}
      <div className="bg-stone-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Savoria</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            "Our Restaurant Customer Portal helps customers easily make reservations, provide feedback, and stay connected with our services."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" 
              alt="Chefs cooking" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-serif text-secondary mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Savoria, our mission is to provide an unforgettable dining experience that delights the senses. We believe that great food brings people together, and we are dedicated to serving authentic flavors with modern sophistication.
            </p>
            
            <h2 className="text-3xl font-bold font-serif text-secondary mb-4">Customer Satisfaction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your satisfaction is our top priority. From the moment you step through our doors or log into our portal, we strive to make every interaction seamless and enjoyable. We continuously listen to feedback to improve our services.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <span className="block text-3xl font-bold text-primary mb-1">15+</span>
                    <span className="text-sm text-gray-600">Years of Service</span>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <span className="block text-3xl font-bold text-primary mb-1">50+</span>
                    <span className="text-sm text-gray-600">Expert Chefs</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;