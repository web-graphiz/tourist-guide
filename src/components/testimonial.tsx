"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tml from "@/db/testimonial.json";
import { testimonial } from "@/models/testimonial";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <Slider {...settings}>
      {tml.testimonial.map((tm: testimonial, i: number) => {
        return (
          <aside className="p-4" key={i}>
            <div className="p-8 rounded-lg bg-darkGray bg-opacity-10 shadow-md flex flex-col items-center justify-center">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 fill-green"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 7C16 10.866 12.418 14 8 14C7.20765 14.0011 6.41859 13.8982 5.653 13.694C5.069 13.99 3.728 14.558 1.472 14.928C1.272 14.96 1.12 14.752 1.199 14.566C1.553 13.73 1.873 12.616 1.969 11.6C0.744 10.37 0 8.76 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM7.194 5.766C7.281 5.89 7.357 6.026 7.421 6.167C7.849 7.115 7.814 8.544 6.479 9.873C6.39752 9.95242 6.28876 9.99769 6.17499 9.99955C6.06122 10.0014 5.95104 9.95972 5.867 9.883C5.82603 9.84589 5.79308 9.80078 5.7702 9.75045C5.74732 9.70013 5.73499 9.64565 5.73396 9.59038C5.73293 9.5351 5.74322 9.48021 5.76421 9.42906C5.7852 9.37792 5.81644 9.33161 5.856 9.293C6.275 8.877 6.528 8.462 6.665 8.073C6.396 8.238 6.077 8.333 5.735 8.333C4.775 8.333 4 7.587 4 6.667C4 5.747 4.776 5 5.734 5C6.005 5 6.262 5.06 6.49 5.166L6.498 5.17C6.667 5.24 6.825 5.352 6.967 5.494C7.052 5.577 7.128 5.668 7.194 5.766ZM11 8.073C10.731 8.238 10.412 8.333 10.07 8.333C9.112 8.333 8.335 7.587 8.335 6.667C8.335 5.747 9.112 5 10.069 5C10.34 5 10.597 5.06 10.825 5.166L10.833 5.17C11.003 5.24 11.16 5.352 11.302 5.494C11.387 5.577 11.463 5.668 11.529 5.766C11.616 5.89 11.693 6.026 11.757 6.167C12.185 7.115 12.149 8.544 10.815 9.873C10.7335 9.95271 10.6245 9.99817 10.5105 10C10.3965 10.0019 10.2861 9.96001 10.202 9.883C10.161 9.84589 10.1281 9.80078 10.1052 9.75045C10.0823 9.70013 10.07 9.64565 10.069 9.59038C10.0679 9.5351 10.0782 9.48021 10.0992 9.42906C10.1202 9.37792 10.1514 9.33161 10.191 9.293C10.611 8.877 10.863 8.462 11.001 8.073H11Z"
                />
              </svg>
              <p className="text-base text-darkGray text-center mt-6 mb-8">
                {tm.message}
              </p>

              <Image
                src={`/${tm.img}`}
                alt={tm.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="text-center text-lg text-black">
                {tm.name}
                <br />
                <small className="text-green font-medium text-sm">
                  {tm.location}
                </small>
              </h3>
            </div>
          </aside>
        );
      })}
    </Slider>
  );
};

export default Testimonial;
