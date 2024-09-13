import { Package } from "@/models/package";

const PackageDetails = ({ pkgInfo }: { pkgInfo: Package }) => {
  return (
    <aside
      className="group w-1/3 bg-cover bg-center"
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
          href=""
          className="bg-green text-white font-semibold px-5 py-1.5 rounded-full"
        >
          Book Now
        </a>
      </div>
    </aside>
  );
};

export default PackageDetails;
