"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, reset, handleSubmit } = useForm();
  const [msg, setMsg] = useState<string>();

  const dataSubmit = (data: any) => {
    if (data) {
      setMsg("Thank You For Contacting US!");
      reset();
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(dataSubmit)}>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 my-3">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="First Name"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
            {...register("lastName", { required: true })}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-6 my-3">
        <div className="w-full md:w-1/2">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
            {...register("email", { required: true })}
          />
        </div>
        <div className="w-full md:w-1/2">
          <input
            type="tel"
            placeholder="Contact No."
            className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none"
            {...register("contactNo")}
          />
        </div>
      </div>

      <div className="my-3">
        <textarea
          className="w-full text-lg px-4 py-1.5 rounded shadow-md outline-none min-h-32"
          {...register("message")}
          placeholder="Message"
        ></textarea>
      </div>

      <div className="flex items-center justify-end mt-6">
        <p className="text-white font-medium text-lg mr-4">{msg}</p>
        <button
          type="submit"
          className="bg-white rounded text-black hover:bg-green transition-all ease-linear py-2 px-3 font-medium uppercase shadow-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
