"use client";

import { Package } from "@/models/package";
import BookingForm from "./bookingForm";
import { useState } from "react";

const PackageDetails = ({ pkgInfo }: { pkgInfo: Package }) => {
  const [popStatus, setPopStatus] = useState(false);
  return (
    <>
      <aside
        className="group w-full sm:w-1/2 lg:w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(/${pkgInfo.bgImg})` }}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-all delay-150 bg-black bg-opacity-75 w-full h-[550px] flex justify-center items-center flex-col">
          <h3 className="uppercase text-center text-4xl font-semibold text-white">
            {pkgInfo.name}
            <br />
            <small className="text-xl tracking-widest font-normal">
              {pkgInfo.location}
            </small>
          </h3>
          <h4 className="text-3xl my-6 text-white font-semibold">
            {pkgInfo.price}
          </h4>
          <a
            onClick={() => setPopStatus(true)}
            className="bg-green text-white cursor-pointer font-semibold px-5 py-1.5 rounded-full"
          >
            Book Now
          </a>
        </div>
      </aside>
      <BookingForm
        pkgName={pkgInfo.name}
        location={pkgInfo.location}
        popStatus={popStatus}
        closePop={(status) => setPopStatus(status)}
      />
    </>
  );
};

export default PackageDetails;
