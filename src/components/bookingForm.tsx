"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const BookingForm = ({
  pkgTitle,
  location,
  popStatus,
  closePop,
}: {
  pkgTitle: string;
  location: string;
  popStatus: boolean;
  closePop: (status: boolean) => void;
}) => {
  const { register, reset, handleSubmit, setValue } = useForm();
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    setValue("pkgName", pkgTitle);
    setValue("location", location);
  }, [pkgTitle, location]);

  const onBooking = (data: any) => {
    if (data) {
      setMsg("Thanks for Your Interest... Back to You shortly!");
      reset();
      let timer = setTimeout(() => {
        setMsg("");
        closePop(false);
        clearInterval(timer);
      }, 2000);
    }
  };

  return (
    popStatus && (
      <section className="fixed z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-80">
        <aside className="bg-green p-7 rounded-2xl w-full max-w-[450px] shadow-md relative">
          <a
            onClick={() => closePop(false)}
            className="absolute -right-5 -top-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-8 h-8"
            >
              <circle cx="64" cy="64" r="64" fill="#c93636" />
              <path
                d="m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4,0l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z"
                fill="#fff"
              />
            </svg>
          </a>
          <h2 className="text-center text-2xl font-semibold text-white">
            <small className="text-sm">Booking for</small>
            <br />
            {pkgTitle} - {location}
          </h2>
          {msg && (
            <p className="text-black text-sm text-center font-semibold">
              {msg}
            </p>
          )}
          <form onSubmit={handleSubmit(onBooking)}>
            <div className="my-3">
              <h4 className="text-white font-semibold text-sm mb-1">
                Your Name
              </h4>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-base px-3 py-1.5 rounded shadow-md outline-none"
                {...register("name", { required: true })}
              />
            </div>
            <div className="my-3">
              <h4 className="text-white font-semibold text-sm mb-1">E-mail</h4>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full text-base px-3 py-1.5 rounded shadow-md outline-none"
                {...register("email", { required: true })}
              />
            </div>
            <div className="my-3">
              <h4 className="text-white font-semibold text-sm mb-1">
                Contact No.
              </h4>
              <input
                type="tel"
                placeholder="Contact No."
                className="w-full text-base px-3 py-1.5 rounded shadow-md outline-none"
                {...register("contactNo", { required: true })}
              />
            </div>
            <div className="my-3">
              <h4 className="text-white font-semibold text-sm mb-1">Message</h4>
              <textarea
                placeholder="Message"
                className="w-full text-base px-3 py-1.5 rounded shadow-md outline-none min-h-24"
                {...register("message")}
              ></textarea>
            </div>
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="bg-white rounded text-black hover:bg-darkGray hover:text-white transition-all ease-linear py-2 px-5 font-medium uppercase shadow-md"
              >
                Send
              </button>
            </div>
          </form>
        </aside>
      </section>
    )
  );
};

export default BookingForm;
