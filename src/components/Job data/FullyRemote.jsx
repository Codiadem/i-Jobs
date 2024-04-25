import React from "react";
import JobData2 from "./JobData2";
import fullyRemote from "../../fully-remote-data";

function FullyRemote() {
  return (
    <>
      <div className="job-box-container">
        {fullyRemote.map((full) => (
          <JobData2 key={full.id} full={full} />
        ))}
      </div>
    </>
  );
}

export default FullyRemote;
