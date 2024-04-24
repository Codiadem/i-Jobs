import React from "react";

function JobData2({ full }) {
  return (
    <>
      <div className="job-box">
        <div className="job-circle"></div>
        <div className="job-details">
          <h3 className="job-company">{full.jobCompany}</h3>
          <p className="job-name">{truncateText(full.jobName, 20)}</p>
          <p className="job-pay">
            <strong>{full.jobPay}</strong>/year
          </p>
          <div className="site">
            <div className="job-site">{full.jobSite}</div>
            <div className="job-time">{full.jobTime}</div>
          </div>
          <div className="job-ago">
            <div className="day">{full.jobAgo}</div>
            <img src="" alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobData2;
