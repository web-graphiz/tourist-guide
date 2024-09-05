import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 py-4 z-50">
      <nav className="flex gap-10 justify-center items-center">
        <Link
          href=""
          className="uppercase font-semibold text-base text-white px-5 py-1 rounded-2xl transition-all hover:bg-green  shadow-md"
        >
          Home
        </Link>
        <Link
          href=""
          className="uppercase font-semibold text-base text-white px-5 py-1 rounded-2xl transition-all hover:bg-green shadow-md"
        >
          About
        </Link>
        <Link
          href=""
          className="uppercase font-semibold text-base text-white px-5 py-1 rounded-2xl transition-all hover:bg-green shadow-md"
        >
          Gallery
        </Link>
        <Link
          href=""
          className="uppercase font-semibold text-base text-white px-5 py-1 rounded-2xl transition-all hover:bg-green shadow-md"
        >
          Packages
        </Link>
        <Link
          href=""
          className="uppercase font-semibold text-base text-white px-5 py-1 hover:bg-green rounded-2xl transition-all shadow-md"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
