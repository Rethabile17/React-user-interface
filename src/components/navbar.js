import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow.svg"
import left from "../images/icon-angle-left.svg"
import right from "../images/icon-angle-right.svg"
import "./navbar.css";
function nav() {
  return (
    <div className="nav">
      <div className="navbar-container">
        <div class="nav-flex">
          <img class="room" src={logo} alt="" />
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
          <h2>SHOP NOW <span><img className="arrow" src={arrow}/></span></h2>
        </div>
        <div class="back-arrow">
        <div className="arrow-img">
          <img className="left" src={left}/>
          <img className="right" src={right}/>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default nav;

