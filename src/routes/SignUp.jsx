import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiAccountCircleFill } from "react-icons/ri";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Add your signup logic here (e.g., API call)
      // For example:
      // await signUpUser(formData);
      
      // If signup is successful, navigate to home page
      navigate('/home');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        <div className="absolute top-8 left-8">
          <div className=" rounded-full flex items-center justify-center">
            <RiAccountCircleFill size={50} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-[#8B6B4D] mb-8">
          Create New Account
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#F5F5F5] rounded-md outline-none"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#F5F5F5] rounded-md outline-none"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-[#F5F5F5] rounded-md outline-none"
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B6B4D] text-white py-3 rounded-md hover:bg-[#725839] transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already Registered?{' '}
          <Link to="/login" className="text-[#8B6B4D] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
