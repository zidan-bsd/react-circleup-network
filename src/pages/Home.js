import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HomeComponent from "../components/home/HomeComponent";

import "./pages.sass";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="home">
        <Navbar />
        <HomeComponent />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
