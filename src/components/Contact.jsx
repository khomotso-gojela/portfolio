import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_k8afq1m',
        'template_nwf6eho',
        {
          from_name: form.name,
          to_name: "khomotso",
          from_email: form.email,
          to_email: "motsoak49@gmail.com",
          message: form.message,
        },
        'E-NR_EU9JRAE60zhO'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for contacting.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={` xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden shadow-lg shadow-gray-500`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex flex-col  bg-gray-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-gray-600 font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className='bg-gray-400 py-4 px-6 placeholder:text-gray-300 text-gray-600 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-600 font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-gray-400 py-4 px-6 placeholder:text-gray-300 text-gray-600 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-600 font-medium mb-4'>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-gray-400 py-4 px-6 placeholder:text-gray-300 text-gray-600 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-blue-600 hover:bg-indigo-300 hover:text-tertiary transition-all py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

   
    </div>
  );
};

export default SectionWrapper(Contact, "contact");