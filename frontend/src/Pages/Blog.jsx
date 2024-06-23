import { useEffect } from "react";
import { Navbar, BlogCard } from "../Components/CompIndex";
import "../Styles/Blog.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { crossImg } from "./URLs.js";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  // AOS animation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const navigate = useNavigate();
  const crossIcon = crossImg;
  return (
    <>
      <Navbar />
      <div className="blogBar">
        <div className="newsroom">Newsroom</div>
        <div className="newPost-div">
          <div
            onClick={() => {
              navigate("/CreateBlog");
            }}
            className="d-flex ce-auto postContainer hov-under"
          >
            New post
            <img
              id="CrossButton"
              className="newPostBtn"
              src={crossIcon}
              alt="new post button"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="blog-cards blog-container mt-5 d-center"
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Blog;
