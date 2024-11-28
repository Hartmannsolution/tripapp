import React from 'react';

const GuideDetails = ({ guide }) => {
  return (
    <div>
      <h3>Guide: {guide.firstname} {guide.lastname}</h3>
      <p>Phone: {guide.phone}</p>
      <p>Emails: {guide.email}</p>
      <p>{guide.yearsOfExperience} years of experience</p>
    </div>
  );
};

export default GuideDetails;