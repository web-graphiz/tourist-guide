import { Package } from "@/models/package";

const PackageInfo = function ({ pkg }: { pkg: Package }) {
  return (
    <aside
      className={`group w-1/3 bg-[url('/${pkg.bgImg}')] bg-cover bg-center`}
    >
      <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-75 w-full h-[550px] flex justify-center items-center flex-col">
        <h3 className="text-center uppercase text-4xl font-semibold text-white">
          {pkg.name}
          <br />
          <small className="text-xl tracking-widest font-normal">
            {pkg.location}
          </small>
        </h3>
        <h4 className="text-3xl my-6 text-white font-semibold">{pkg.price}</h4>
        <a
          href=""
          className="bg-green text-white font-semibold px-5 py-1.5 rounded-full"
        >
          Book Now
        </a>
      </div>
    </aside>
  );
};

export default PackageInfo;
