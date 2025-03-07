"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setSuccess(true);
      setFormData({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
    } else {
      setError(result.message || 'Failed to send message. Try again later.');
    }
  } catch (error) {
    setError('An error occurred. Please try again later.');
  }

  setLoading(false);
};

  const info = [
    {
      icon: <FaPhoneAlt className="text-accent text-xl" />, 
      title: 'Phone', 
      value: '+92 3052537941'
    },
    {
      icon: <FaEnvelope className="text-accent text-xl" />, 
      title: 'Email', 
      value: 'furqanbaber69@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-accent text-xl" />, 
      title: 'Address', 
      value: 'Code Corner Tech Town'
    },
  ]

  return (
    <motion.section       
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      exit={{ opacity: 0 }}
      className="py-6">
      
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          
          {/* Contact Info Section */}
          <div className="flex-1 flex flex-col gap-6 items-start xl:items-end justify-center order-1 xl:order-none mb-8 xl:mb-0">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-white/20 rounded-lg w-full max-w-sm">
                {item.icon}
                <div>
                  <h4 className="text-white text-lg font-semibold">{item.title}</h4>
                  <p className="text-white/60">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="xl:h-[54%] order-2 xl:order-none w-full xl:w-[65%]">
            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent '>Let's work together</h3>
              <p className='text-white/60'>Send us a message and we will get back to you.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='text' name='firstname' value={formData.firstname} onChange={handleChange} placeholder='Firstname' required />
                <Input type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Lastname' required />
                <Input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email address' required />
                <Input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone number' required />
              </div>

              {/* Service Select */}
              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder='Select Service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea name='message' value={formData.message} onChange={handleChange} placeholder='Type your message here.' required className='h-[200px] focus:border-accent' />

              {success && <p className="text-green-500">Message sent successfully!</p>}
              {error && <p className="text-red-500">{error}</p>}

              <Button type="submit" size='md' className="max-w-40" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
