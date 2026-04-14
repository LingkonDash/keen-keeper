import Banner from "@/components/Banner";
import Friends from "@/components/Friends";

export default function Home() {
  return (
    <main className="max-w-400 mt-9 mx-auto px-5">
      
      <Banner />

      <div className="divider"></div>
      <Friends />
    </main>
  );
}
