import { NavLink } from "react-router-dom";
import "./styles.css";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <div style={{ color: "white" }} className="FooterContainer">
      <div className="FooterNav">
        <img
          src="https://art.pixilart.com/dd3ec29f4164ff1.png"
          alt="bob-mad"
          style={{ color: "white", paddingBottom: "20px", width: "150px" }}
        />
        <div style={{ color: "white", paddingLeft: "35px", width: "150px" }}>
          created by
        </div>
        <NavLink className="FooterLink" to="/">
          <h1 style={{ color: "white", paddingTop: "0px" }}>GM Team</h1>
        </NavLink>{" "}
      </div>
      <div></div>
      <div className="FooterCatergoriesAccountIcons">
        <div className="FooterCategories">
          <h3>Categories</h3>
          <p>
            Laptops & Computers <br />
            Cameras & Photography <br />
            Smart Phones & Tables
            <br />
            Video Games & Consoles <br />
            Waterproof Headphones
          </p>
        </div>
        <div className="FooterMyAccount">
          <h3>My Account</h3>
          <p>
            My Account
            <br />
            Discount
            <br />
            Returns
            <br />
            Orders History
            <br />
            Order Tracking
          </p>
        </div>
        <div className="FooterIconsContainer">
          <h3>Follow us!</h3>
          <div className="FooterIcon">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="FooterIcon" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <FiTwitter className="FooterIcon" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook className="FooterIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
