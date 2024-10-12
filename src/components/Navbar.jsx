import "./Navbar.css";
function Navbar() {
  return (
    <div className="page">
      <div>
        <div className="subBar">
          <div className="image">
            <img src="/freshfield logo.svg" FreshField />
          </div>
          <div className="options">
            <a href="#about" className="optionssss">
              <option> About Us</option>{" "}
            </a>
            <a href="#story" className="optionssss">
              <option> Our Story</option>{" "}
            </a>
            <a href="#harvest" className="optionssss">
              <option> Our Harvest</option>{" "}
            </a>
            <a href="#benefit" className="optionssss">
              <option> Benefits</option>{" "}
            </a>
            <a href="#reviews" className="optionssss">
              <option> Reviews</option>{" "}
            </a>
            <a href="#contact" className="optionssss">
              <option> Contact Us</option>{" "}
            </a>
            <div className="button"> Buy Template</div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div className="side-text">
            <p>
              <h5 className="texttop">FROM OUR FARM,TO YOUR TABLE</h5>
            </p>
            <br />
            <b>
              <h2 className="text">Discover the</h2>

              <h2 className="text">
                Difference of <h style={{ color: "#ff8a4a" }}>Truly </h>
              </h2>
              <p className="text">
                <h style={{ color: "#ff8a4a" }}>Organic </h>Vegetables
              </p>
            </b>
            <p className="paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
              <br /> Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt
              <br /> nostrud amet.
            </p>
            <div style={{ display: "flex", marginLeft: "5px" }}>
              <button className="discover-button">
                {" "}
                Discover our products
              </button>
              <button className="Contact">Contact </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
