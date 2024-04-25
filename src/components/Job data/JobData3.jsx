import React from "react";
import star from "../../images/star.png";

function JobData3({ onsite }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <>
      <div className="job-box">
        <div className="job-circle"></div>
        <div className="job-details">
          <h3 className="job-company">{onsite.jobCompany}</h3>
          <p className="job-name">{truncateText(onsite.jobName, 20)}</p>
          <p className="job-pay">
            <strong>{onsite.jobPay}</strong>/year
          </p>
          <div className="site">
            <div className="job-site">{onsite.jobSite}</div>
            <div className="job-time">{onsite.jobTime}</div>
          </div>
          <div className="job-ago">
            <div className="day">{onsite.jobAgo}</div>
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobData3;
