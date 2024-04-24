import React from "react";

function JobData1({ job }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <>
      <div className="job-box">
        <div className="job-circle"></div>
        <div className="job-details">
          <h3 className="job-company">{job.jobCompany}</h3>
          <p className="job-name">{truncateText(job.jobName, 20)}</p>
          <p className="job-pay">
            <strong>{job.jobPay}</strong>/year
          </p>
          <div className="site">
            <div className="job-site">{job.jobSite}</div>
            <div className="job-time">{job.jobTime}</div>
          </div>
          <div className="job-ago">
            <div className="day">{job.jobAgo}</div>
            <img src="" alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobData1;
