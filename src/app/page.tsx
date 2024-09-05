import Header from "@/components/header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="bg-bannerImg bg-repeat bg-cover bg-bottom">
        <div className="bg-blackOverlay w-full h-screen flex items-end">
          <div className="container mx-auto mb-40">
            <h1 className="text-white uppercase text-7xl font-bold">
              Never Stop
              <br />
              Exploring World
            </h1>
            <p className="text-white w-full max-w-2xl my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque
              minus perspiciatis vel expedita cumque minima aut vero, laboriosam
              ratione ducimus! Architecto, quod maiores repellendus voluptatibus
              accusantium provident eligendi minus.
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
    </>
  );
};

export default Home;
