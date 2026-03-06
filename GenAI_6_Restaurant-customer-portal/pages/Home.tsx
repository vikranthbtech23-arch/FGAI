import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MessageSquare, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 tracking-tight">Welcome to Our Restaurant</h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
            Experience the finest culinary delights in a warm and elegant atmosphere.
          </p>
          <Link 
            to="/menu" 
            className="inline-block bg-primary hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            View Menu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-6 rounded-xl bg-orange-50 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <CalendarDays className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif text-secondary">Easy Reservations</h3>
              <p className="text-gray-600 mb-4">Book your table in seconds and skip the waiting line.</p>
              <Link to="/reservation" className="text-primary font-semibold hover:underline">Book Now &rarr;</Link>
            </div>

            <div className="p-6 rounded-xl bg-orange-50 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif text-secondary">Customer Feedback</h3>
              <p className="text-gray-600 mb-4">We value your opinion. Help us serve you better.</p>
              <Link to="/feedback" className="text-primary font-semibold hover:underline">Share Feedback &rarr;</Link>
            </div>

            <div className="p-6 rounded-xl bg-orange-50 hover:shadow-lg transition duration-300">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif text-secondary">Quality Service</h3>
              <p className="text-gray-600 mb-4">Award-winning chefs and hospitality at your service.</p>
              <Link to="/about" className="text-primary font-semibold hover:underline">Learn More &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;