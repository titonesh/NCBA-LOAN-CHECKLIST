// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Footer from "./components/Footer";

import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <Home/> */}
      <Hero rmChecklist={undefined}/>

      <Footer />
    </div>
  );
}

export default Home;
