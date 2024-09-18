import React, { useState } from 'react';
import axios from 'axios';


function MentorRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    bio: '',
    linkedin: '',
    twitter: '',
    number:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
   axios.post('http://localhost:3000/api/v1/register-mentor', formData)
    .then((response) => {
      console.log(response);
      navigator('/login')
    })
    .catch((error) => {
      console.error(error)
    })
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Become a Mentor</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto"
      >
        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email address"
          />
        </div>

        {/* Expertise Field */}
        <div className="mb-6">
          <label htmlFor="expertise" className="block text-gray-700 font-bold mb-2">
            Area of Expertise
          </label>
          <input
            type="text"
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your area of expertise (e.g. AI, Blockchain)"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="expertise" className="block text-gray-700 font-bold mb-2">
            Number
          </label>
          <input
            type="text"
            id="expertise"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your Contact Number"
          />
        </div>

        {/* Bio Field */}
        <div className="mb-6">
          <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
            Short Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Tell us a little about yourself"
            rows="4"
          />
        </div>

        {/* LinkedIn Field */}
        <div className="mb-6">
          <label htmlFor="linkedin" className="block text-gray-700 font-bold mb-2">
            LinkedIn Profile (Optional)
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="LinkedIn profile URL"
          />
        </div>

        {/* Twitter Field */}
        <div className="mb-6">
          <label htmlFor="twitter" className="block text-gray-700 font-bold mb-2">
            Twitter Profile (Optional)
          </label>
          <input
            type="url"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Twitter profile URL"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 focus:outline-none"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default MentorRegistrationForm;
