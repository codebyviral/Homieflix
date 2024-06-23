import { useEffect, useState } from "react";

const blogCard = () => {

  return (
    <>
      <div className="blog-card">
        <div className="blogCard">
          <img
            draggable="false"
            className="blogImage"
            src={
              "https://images.unsplash.com/photo-1718382341271-070ac4697558?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="blog-image"
          />
          <div className="date-info fc-black">17 Jun 2024</div>
          <div className="blogTitle ce-auto fc-black">
            Britain’s Quarter of a Billion Pound ‘Bridgerton’ Boost
            <text>...</text>
            <span className="rightArrow text-red"> → </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogCard;
