import React from "react";
import star from "../../images/star.png";

function JobData2({ full }) {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

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
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobData2;
