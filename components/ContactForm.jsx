"use client"

import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !description) {
        toast.error("Please fill in all the fields correctly.");
        return;
      }
      const data = { name, email, description };
      const res = await axios.post("http://localhost:8000/api/message", data);
      setName('');
      setEmail('');
      setDescription('');
      toast.success("Thanks for the message! We'll contact you through email.");
      console.log(res.data);
    } catch (error) {
      console.log("Error submitting form", error);
      toast.error("There was an error submitting the form. Please try again later.");
    }
  }

  return (
    <div className='flex flex-col h-auto w-auto mx-auto lg:ml-auto'>
      <input
        required
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-[350px] ml-4 lg:ml-9 mt-4 self-end lg:w-[450px] focus:outline-none mr-3 rounded-none bg-white"
      />
      <input
        required
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[350px] ml-4 lg:ml-9 mt-4 self-end lg:w-[450px] focus:outline-none mr-3 rounded-none bg-white"
      />
      <textarea
        required
        placeholder='How can we help?'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-[350px] h-[100px] ml-4 lg:ml-9 mt-4 mr-3 resize-none border border-gray-300 p-2 self-end focus:border-blue-500 lg:w-[450px] rounded-none"
      />
      <div className='h-auto w-auto'>
        <button type="submit" onClick={handleSubmit} className="bg-[#9F8F87] text-white mt-7 p-2 px-3 b-color align-start ml-4 lg:ml-9 rounded-md hover:bg-[#9F8F87]">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
