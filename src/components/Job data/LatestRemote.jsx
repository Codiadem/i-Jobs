import React from "react";
import JobData1 from "./JobData1";
import latestRemoteData from "../../latest-remote-data";

function LatestRemote() {
  return (
    <>
      <div className="job-box-container">
        {latestRemoteData.map((job) => (
          <JobData1 key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default LatestRemote;
