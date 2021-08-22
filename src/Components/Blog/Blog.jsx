import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeAbout from "../Home/Home-About-us/HomeAbout";

import "./Blog.css";

const Blog = () => {
  const heading = `Our Certificate & Online Program For 2021`;
  const para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
    voluptatibus. Accusantium maiores esse voluptas? Ut non, est laborum
    dolores omnis cumque quisquam nulla accusamus fugit itaque? Dolores
    id culpa dignissimos?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
    numquam vero, quia quas maiores quo recusandae eos aspernatur
    dolores dolore dolorem, nemo, nesciunt corporis praesentium tenetur
    reiciendis magni molestiae iste esse laborum quos in molestias
    labore hic! Maxime quos adipisci repellat beatae dolorem ad.
    Voluptas hic tempora autem velit, odit recusandae culpa quasi,
    distinctio exercitationem nesciunt eligendi odio pariatur non
    aliquid? Unde distinctio delectus inventore, eveniet voluptate animi
    sunt asperiores iste qui sequi saepe, facilis magnam labore, dolor
    maxime possimus!
    `;

  const catHeading = [
    "Business Analytics",
    "Data Science",
    "Machine Learning",
    "Computer Science",
    "Deep Learning",
    "Artificial Intelligence",
    "Computer Artitecture",
  ];

  const catVal = ["22", "11", "34", "08", "15", "78", "10"];
  return (
    <>
      <Navbar />
      <section className="blog-content-section">
        <div className="row">
          <div className="blog-left">
            <img src="../img/graduate.jpg" alt="graduate" />
            <h2>{heading}</h2>
            <p>{para}</p>
            <br />
            <p>{para}</p>
            <br />
            <p>{para}</p>

            <div className="comment-box">
              <h3>Leave a comment</h3>
              <form className="comment-form">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
                <textarea cols="30" rows="10"></textarea>
                <button type="submit" className="header-btn btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>{catHeading[0]}</span>
              <span>{catVal[0]}</span>
            </div>
            <div>
              <span>{catHeading[1]}</span>
              <span>{catVal[1]}</span>
            </div>
            <div>
              <span>{catHeading[2]}</span>
              <span>{catVal[2]}</span>
            </div>
            <div>
              <span>{catHeading[3]}</span>
              <span>{catVal[3]}</span>
            </div>
            <div>
              <span>{catHeading[4]}</span>
              <span>{catVal[4]}</span>
            </div>
            <div>
              <span>{catHeading[5]}</span>
              <span>{catVal[5]}</span>
            </div>
            <div>
              <span>{catHeading[6]}</span>
              <span>{catVal[6]}</span>
            </div>
          </div>
        </div>
      </section>
      <HomeAbout />
    </>
  );
};

export default Blog;
