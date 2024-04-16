import "../style/find-job.css";
import search from "../images/search-glass.png";

function FindJobPage() {
  return (
    <>
      <div className="search">
        <input type="text" placeholder="Find a job that defines you" />
        <button type="submit">
          <img src={search} alt="" />
        </button>
      </div>
      <div className="job-box-container">
        <div className="job-box">
          <div className="job-circle"></div>
        </div>
        <div className="job-box">
          <div className="job-circle"></div>
        </div>
        <div className="job-box">
          <div className="job-circle"></div>
        </div>
        <div className="job-box">
          <div className="job-circle"></div>
        </div>
        <div className="job-box">
          <div className="job-circle"></div>
        </div>
      </div>
    </>
  );
}

export default FindJobPage;
