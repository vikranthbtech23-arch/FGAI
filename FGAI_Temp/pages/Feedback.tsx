import React, { useState } from 'react';
import { FeedbackData } from '../types';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    foodRating: 'Excellent',
    serviceRating: 'Excellent',
    comments: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border-t-4 border-primary">
          <h2 className="text-2xl font-bold font-serif text-secondary mb-4">Feedback Received</h2>
          <p className="text-gray-600 mb-6">Thank you for your feedback! We appreciate your valuable response.</p>
          <button 
            onClick={() => { setSubmitted(false); setFormData({...formData, comments: ''}); }}
            className="text-primary hover:text-orange-800 font-semibold"
          >
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-50 p-6 border-b border-orange-100">
          <h2 className="text-2xl font-bold font-serif text-secondary">We Value Your Feedback</h2>
          <p className="text-gray-600 text-sm mt-1">Help us improve our service.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Food Quality Rating</label>
              <select
                name="foodRating"
                value={formData.foodRating}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Rating</label>
              <select
                name="serviceRating"
                value={formData.serviceRating}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
              >
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
            <textarea
              name="comments"
              required
              rows={4}
              value={formData.comments}
              onChange={handleChange}
              placeholder="Tell us about your experience..."
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary hover:bg-stone-800 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;