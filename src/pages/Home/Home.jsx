import "./Home.scss";
import homeLogo from "../../img/stars.svg";
import Navbar from "../../components/Navbar/Navbar";
import Twitt from "../../components/Twitt/Twitt";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home__top">
        <h1 className="home__title">Home</h1>
        <img src={homeLogo} alt="star-logo" />
      </div>
      <Twitt last="last"/>
    </div>
  );
};

export default Home;
