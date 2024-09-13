import Header from "@/components/header";
import PackageDetails from "@/components/packageDetails";
import { Package } from "@/models/package";

const packages = [
  {
    bgImg: "venice.jpg",
    name: "City of Canal",
    location: "Venice",
    price: "$1230.00",
  },
  {
    bgImg: "moscow.jpg",
    name: "The Heritage City",
    location: "Moscow",
    price: "$1430.00",
  },
  {
    bgImg: "paris.jpg",
    name: "City of Love",
    location: "Paris",
    price: "$1030.00",
  },
  {
    bgImg: "mumbai.jpg",
    name: "City of Dreams",
    location: "Mumbai",
    price: "$830.00",
  },
  {
    bgImg: "tokyo.jpg",
    name: "City of Anime",
    location: "Tokyo",
    price: "$2830.00",
  },
  {
    bgImg: "beijing.jpg",
    name: "The Forbidden City",
    location: "Beijing",
    price: "$1930.00",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom">
        <div className="w-full h-screen flex items-end bg-blackOverlay">
          <div className="container mx-auto mb-40">
            <h1 className="text-white uppercase text-7xl font-bold">
              Never Stop
              <br />
              Exploring World
            </h1>
            <p className="text-white w-full max-w-2xl my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              facilis enim laboriosam iste doloribus blanditiis illo veniam fuga
              vitae architecto, laborum debitis sequi, ducimus repellendus
              reprehenderit fugit assumenda deserunt distinctio!
            </p>
            <a
              href=""
              className="bg-green text-white uppercase font-semibold px-6 py-3 rounded-md transition-all inline-block hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-darkGray mb-3 uppercase">
            Packages
            <span className="inline-block bg-green w-40 h-1 ml-2"></span>
          </h2>
          <p className="text-sm text-darkGray w-full max-w-[750px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro
            ullam laboriosam nesciunt tenetur perspiciatis praesentium illum
            ducimus distinctio aut eos commodi, sit a incidunt!
          </p>
          <div className="flex flex-wrap mt-8">
            {packages.map((pkg: Package, i: number) => {
              return <PackageDetails key={i} pkgInfo={pkg} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
