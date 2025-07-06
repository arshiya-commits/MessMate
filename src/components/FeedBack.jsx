import React, { useState } from "react";
import toast from "react-hot-toast";

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    block: "",
    complaint: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("✅ Feedback submitted successfully!");

    // Clear form values
    setFormData({
      name: "",
      gender: "",
      block: "",
      complaint: "",
      rating: "",
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          📝 Mess Feedback Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-orange-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border border-orange-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Block Number */}
          <div>
            <label className="block font-medium mb-1">Block Number</label>
            <input
              type="text"
              name="block"
              value={formData.block}
              onChange={handleChange}
              required
              className="w-full border border-orange-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="e.g. A-1, B-2"
            />
          </div>

          {/* Complaint */}
          <div>
            <label className="block font-medium mb-1">Complaint / Suggestion</label>
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border border-orange-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write your feedback here..."
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium mb-1">Rating</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full border border-orange-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select rating</option>
              <option value="1">⭐ Poor</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
