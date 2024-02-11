"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function HelpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(description);
  }
  return (
   
     
        <div className='h-auto w-auto  ml-auto'>
          <Input
            type='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[400px] ml-9 mt-4 self-end xl:w-[500px] focus:outline-none mr-3 rounded-none"
          />
          <Input
            type='email'
            placeholder='your@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[400px] ml-9 mt-4 self-end xl:w-[500px] focus:outline-none mr-3 rounded-none"
          />
          <textarea
            placeholder='How can we help?'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-[400px] h-[100px] ml-9 mt-4 mr-3 resize-none border border-gray-300  p-2 self-end focus:outline-none focus:border-blue-500 xl:w-[500px] rounded-none"
          />
        
        <div className='h-auto w-auto '>
          <Button type="button" onClick={handleSubmit} className="mt-2  b-color align-start ml-9 rounded-none">
            Submit
          </Button>
        </div>
     </div>
   
  );
}

export default HelpForm;
