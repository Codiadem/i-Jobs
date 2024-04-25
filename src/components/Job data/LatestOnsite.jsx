import React from "react";
import JobData3 from "./JobData3";
import onsiteJobs from "../../onsite-jobs-data";

function LatestOnsite() {
  return (
    <>
      <div className="job-box-container">
        {onsiteJobs.map((onsite) => (
          <JobData3 key={onsite.id} onsite={onsite} />
        ))}
      </div>
    </>
  );
}

export default LatestOnsite;
