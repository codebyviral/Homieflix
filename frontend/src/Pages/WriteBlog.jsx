import { useEffect } from "react";
import { Navbar, BlogCard } from "../Components/CompIndex";
import "../Styles/Blog.css";
import "aos/dist/aos.css";
import AOS from "aos";
const Blog = () => {
  // AOS animation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <div className="blogBar">
          <div className="newsroom">Newsroom</div>
          <div className="newPost-div">
            <div className="d-flex ce-auto postContainer hov-under">
              New post
              <img
                className="newPostBtn"
                src={
                  "https://img.icons8.com/?size=512w&id=TasygyA45Sdx&format=png&color=FFFFFF"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="textBox d-center  mt-5">
          <div className="divTitle rounded-5">
            <input
              placeholder="Homie, 👋 your Title goes here..."
              className="blogInputTitle rounded-5"
              type="text"
            />
          </div>
          <div className="articleArea">
            <textarea
              className="articleInputArea"
              placeholder="Homie, 👋 your Blog Article goes here..."
              name="homieArticle"
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
