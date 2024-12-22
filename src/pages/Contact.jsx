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
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Contact Information */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-6 sm:mb-8">Contact</h1>
          
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold italic text-[#333333] mb-2">
              Mr. Yaseen Khan
            </h2>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Age: 65 years</p>
              <p>Education: Class 4th pass</p>
              <p className="mb-2">
                Contact: <a href="tel:9214480920" className="hover:underline">9214480920</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold italic text-[#333333] mb-2">
              Mr. Akbar Khan
            </h2>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Age: 36 years</p>
              <p>Education: B.Com</p>
              <p className="mb-2">
                Contact: <a href="tel:9667673955" className="hover:underline">9667673955</a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <p className="text-base sm:text-lg italic mb-4 sm:mb-6">
            Please fill out the form below to send us an email.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-2 sm:p-3 outline-none w-full"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-2 sm:p-3 outline-none w-full"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              value={formData.subject}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-2 sm:p-3 outline-none w-full"
              required
            />

            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#D9D9D9] p-2 sm:p-3 h-32 sm:h-40 outline-none resize-none w-full"
              required
            />

            <button
              type="submit"
              className="bg-[#D9D9D9] py-2 sm:py-3 px-6 sm:px-8 self-end hover:bg-[#c4c4c4] transition-colors text-sm sm:text-base"
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
