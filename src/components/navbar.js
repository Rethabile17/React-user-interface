import logo from "../images/logo.svg";
import "./navbar.css";
function nav() {
  return (
    <div className="nav">
      <div className="navbar-container">
        <div class="nav-flex">
          <img src={logo} alt="" />
          <ul className="nav2">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
      <div className="info-container">
        <div>
          <h1 class="h1">Discover innovative ways to decorate</h1>
          <p class="p1">
            We provide unmatched quality, comfort,and style for property owners
            across the country.Our experts combine form and function in bringing
            your vision to life.Create a room in your own style with our
            collection and make your property a reflection of you and what you
            love.
          </p>
          <h2>SHOP NOW </h2>
          <div className="icon"></div>
          <svg width="24" height="27" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default nav;
