import Footer from "../components/Footer";
import "../style/find-job.css";
import search from "../images/search-glass.png";
import LatestRemote from "../components/LatestRemote";
import FullyRemote from "../components/FullyRemote";

function FindJobPage() {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Find a job that defines you" />
        <button type="submit">
          <img src={search} alt="" />
        </button>
      </div>
      <div className="array">
        <h3>Latest Remote Jobs</h3>
        <LatestRemote />
      </div>
      {/* <div className="array">
        <h3>Latest Fully Remote Jobs</h3>
        <FullyRemote />
      </div> */}
      <Footer />
    </>
  );
}

export default FindJobPage;
