import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ContactData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center text-secondary mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary">
            <h3 className="text-xl font-bold font-serif mb-6 text-secondary">Get in Touch</h3>
            
            <div className="flex items-start mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Culinary Avenue,<br />Flavor District, FD 45678</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">contact@savoria.com</p>
              </div>
            </div>
          </div>
          
          <div className="h-64 rounded-xl overflow-hidden shadow-md">
             {/* Placeholder for map */}
             <img 
               src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80" 
               alt="Map Location" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
            {submitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We will respond shortly.</p>
                    <button 
                        onClick={() => { setSubmitted(false); setFormData({name: '', email: '', message: ''}); }}
                        className="mt-6 text-primary font-medium hover:underline"
                    >
                        Send another message
                    </button>
                 </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold font-serif text-secondary mb-2">Send us a Message</h3>
                    
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    </div>
                    
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                    />
                    </div>
                    
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                    ></textarea>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-orange-800 transition duration-300 flex items-center justify-center"
                    >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default Contact;