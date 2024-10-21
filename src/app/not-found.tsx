import Image from "next/image";
import Link from "next/link";
import lostMan from "../../public/lost-man.png";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col">
      <Image src={lostMan} alt="Lost Man 404" width={700} height={450} />
      <h1 className="text-5xl text-green font-bold mb-5">Oops!</h1>
      <h2 className="text-xl text-black mb-5">
        Your are lost... We can&apos;t find the page you&apos;re looking for.
      </h2>
      <Link
        href={"/"}
        className="bg-green text-white hover:bg-darkGray font-bold text-lg py-1 px-4 rounded-full transition-all cursor-pointer"
      >
        &larr; Back To Home
      </Link>
    </section>
  );
}
