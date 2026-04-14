import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Friends from "@/components/Friends";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <Banner />

      <div className="divider max-w-400 my-9 mx-auto px-5"></div>
      <main className="max-w-400 mt-9 mx-auto px-5">
        <Friends />
      </main>

      <Footer />

    </>
  );
}
