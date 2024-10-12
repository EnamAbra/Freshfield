import "./Home2.css";
function Home2() {
  return (
    <div>
      <div className="story" id="story">
        <h1>OUR STORY</h1>{" "}
      </div>

      <div className="textunder">
        <p>
          <b>
            Showing the seeds of an Organic <br /> Revolution
          </b>
        </p>
      </div>

      <div className="container">
        <div className="text60">
          <span>Our farm 60 years ago</span>
        </div>

        <div>
          <img className="left-image" src="/farm60.webp" alt="first image" />
          <p className="roots">
            Rooted in Tradition: The <br /> Early Years of Our Farm
          </p>
          <p style={{ color: "#6a7280" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum tristique. <br />
            Duis cursus, mi quis viverra ornare, eros dolor interdum <br />
            nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <div>
          <span className="vs">VS</span>
        </div>
        <div className="right-image"></div>
        <div>
          <img className="left-image" src="/farm today.webp" />
          <p className="roots">
            Growing Together:
            <br /> Evolution and Expansion
          </p>
          <p style={{ color: "#6a7280" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum tristique. <br />
            Duis cursus, mi quis viverra ornare, eros dolor interdum <br />
            nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home2;
