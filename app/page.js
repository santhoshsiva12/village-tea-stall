import BannerText from "./components/BannerText";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <section className="w-full bg-cover bg-image">
        <Header />
        <BannerText />
      </section>
      <section className="bg-black w-full py-5 px-7">
        <Footer />
      </section>
    </main>
  );
}