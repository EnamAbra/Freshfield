import "./Home.css";
function Home() {
  return (
    <div>
      <div>
        <div className="section">
          <video
            width="800px"
            height="300px"
            src="/shortvideo.mp4"
            autoPlay
            loop
          ></video>

          <div className="sideby-video">
            <h4 id="about">ABOUT US</h4>
            <br />
            <b>
              <h2 className="meet">
                Meet the Minds
                <br />
                Behind Our
                <br />
                Modern Farm
              </h2>
            </b>
            <p style={{ color: "#9ba3af" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Suspendisse varius enim in eros elementum tristique. Duis
              cursus,
              <br /> mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo
              <br /> diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id <br />
              rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
