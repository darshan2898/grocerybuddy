import React from "react";

const Notification = ({ notification }) => {
  const { text, className } = notification;

  return <div className={`notification ${className}`}>{text}</div>;
};

export default Notification;
