import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem
            ipsum dolor sit amet, consectetur adip lorem ipsum dolor lorem ipsum
            dolor sit amet, consectetur adip lorem t
          </p>
          <Link to="/register" className="btn btn-hero">
            Register / Login
          </Link>
        </div>
        <img src={main} alt="Job Hunter" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
