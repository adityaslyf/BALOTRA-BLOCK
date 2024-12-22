import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Information */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#333333] mb-8">Contact</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold italic text-[#333333] mb-2">Mr.Yaseen Khan</h2>
            <p className="mb-1">Age: 65 years</p>
            <p className="mb-1">Education: Class 4th pass</p>
            <p className="mb-4">Contact: 9214480920</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold italic text-[#333333] mb-2">Mr. Akbar Khan</h2>
            <p className="mb-1">Age: 36 years</p>
            <p className="mb-1">Education: B.Com</p>
            <p className="mb-4">Contact: 9667673955</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <p className="text-lg italic mb-6">Please fill out the form below to send us an email.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-3 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-3 outline-none"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              value={formData.subject}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-3 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-3 h-40 outline-none resize-none"
              required
            />

            <button
              type="submit"
              className="bg-[#D9D9D9] py-3 px-8 self-end hover:bg-[#c4c4c4] transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
