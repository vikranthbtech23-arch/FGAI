import React, { useState } from 'react';
import { CustomerData } from '../types';

const CustomerDetails: React.FC = () => {
  const [formData, setFormData] = useState<CustomerData>({
    fullName: '',
    email: '',
    phone: '',
    favoriteFood: '',
    frequency: 'First Time'
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Thank you, ${formData.fullName}! Your customer details have been saved successfully.`);
    // Reset or keep data based on preference. Keeping it to show what was saved.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-serif font-bold text-secondary mb-8 border-b pb-4">My Details</h2>
        
        {message && (
           <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700 font-medium">{message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded focus:border-primary outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded focus:border-primary outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded focus:border-primary outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Visit Frequency</label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded focus:border-primary outline-none transition"
              >
                <option value="First Time">First Time</option>
                <option value="Regular">Regular</option>
                <option value="Frequent">Frequent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Favorite Food</label>
            <input
              type="text"
              name="favoriteFood"
              value={formData.favoriteFood}
              onChange={handleChange}
              placeholder="e.g. Butter Chicken"
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-200 rounded focus:border-primary outline-none transition"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-secondary text-white font-bold rounded hover:bg-stone-800 transition shadow-md"
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerDetails;