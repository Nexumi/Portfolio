import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";

export default function HomePage() {
  return (
    <div class="h-screen flex flex-col">
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}
