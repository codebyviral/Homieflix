import { Navbar } from "../Components/CompIndex.js";
import Viral from "../assets/viral.png";
import Panth from "../assets/panth.jpeg";

const About = () => {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#000" }}>
      {/* Assuming <Navbar /> is already implemented */}
      <Navbar />

      <div className="container py-5 text-white">
        {/* Main Heading */}
        <h1 className="display-4 text-center text-danger mb-5">About Us</h1>

        {/* Viral's Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="h3 text-danger mb-3 text-center text-md-start">
              Viral Vaghela
            </h2>
            <p className="lead text-center text-md-start">
              I am the official Manager of Homieflix, ensuring smooth operations
              and overseeing the growth and direction of our business. I am
              passionate about providing affordable entertainment and creating a
              seamless experience for all our Homies.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={Viral}
              alt="Viral Vaghela"
              className="rounded-circle img-fluid shadow-lg"
              style={{ width: "12rem", height: "12rem", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Panth's Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center order-md-2 mb-4 mb-md-0">
            <img
              src={Panth}
              alt="Panth"
              className="rounded-circle img-fluid shadow-lg"
              style={{ width: "12rem", height: "12rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <h2 className="h3 text-danger mb-3 text-center text-md-start">
              Panth Patel
            </h2>
            <p className="lead text-center text-md-start">
              Panth Patel handles the Accounts Department, ensuring that all our
              finances are in perfect order. With a keen eye for detail, he
              ensures that our pricing remains competitive while maintaining a
              smooth flow of resources to keep Homieflix thriving.
            </p>
          </div>
        </div>

        {/* Call to Action or Footer */}
        <div className="text-center mt-5">
          <p className="lead">
            Together, we are committed to bringing the best entertainment
            experience for all of you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
