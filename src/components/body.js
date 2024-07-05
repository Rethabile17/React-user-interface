import dark from "../images/image-about-dark.jpg";
import light from "../images/image-about-light.jpg";


function body() {
  return (
    <div className="body">
      <div class="img-container-dark">
       <img  className="img" src={dark} alt=""/>
      </div>
      <div>
        <h1 class="h3">ABOUT OUR FURNITURE</h1>
        <p class="p2">
          Our multifunctional collection blends and function to suit your
          individual taste.Make each room unique,or pick a cohesive theme that
          best express your interests and what inspires you.Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between.Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div class="img-container-light">
        <img className="img" src={light} alt=""/>
      </div>

    </div>
  );
}

export default body;
