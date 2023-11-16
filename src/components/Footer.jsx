import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Footer = () => (
  <>
    <div className="footer-main">
      <div className="footer-logo">
        <span className="sp1">food</span>
        <span>Lads</span>
      </div>
      <div className="footer-body">
        <div className="footer-body-left">
          <div>Connect with Us</div>
          <a
            href="https://github.com/TrinayBhati"
            target="_blank"
            className="footer-body-left-pair"
          >
            <AiFillGithub /> <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/trinay-bhati/"
            target="_blank"
            className="footer-body-left-pair"
          >
            <AiFillLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://trinay.vercel.app/"
            target="_blank"
            className="footer-body-left-pair"
          >
            <BsGlobe /> <span>Portfolio</span>
          </a>
        </div>
        <div className="footer-body-right">
          <div>
            Get to Know Us
            <li>About us</li>
            <li>Careers</li>
            <li>fodLads hygiene</li>
          </div>
          <div>
            Make Money with Us
            <li>Sell on foodLads</li>
            <li>Become an Affiliate</li>
            <li>Advertise our Products</li>
          </div>
          <div>
            Terms of use
            <li>one</li>
            <li>one</li>
            <li>one</li>
          </div>
        </div>
      </div>
      <div className="footer-last">
        © 2023-2045, foodLads.com, Inc. or its affiliates
      </div>
    </div>
  </>
);

export default Footer;
