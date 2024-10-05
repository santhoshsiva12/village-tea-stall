import BannerText from "./components/BannerText";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <section className="w-full bg-cover bg-image">
        <Header />
        <BannerText />
      </section>
    </main>
  );
}