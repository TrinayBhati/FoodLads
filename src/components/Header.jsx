import logo from "../../assets/header-logo.png";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const Title = () => (
  <a href="/">
    <img className="header-logo" alt="logo" src={logo} />
  </a>
);
const Header = () => {
  const [scroll, setScroll] = useState(0);

  const today = dayjs();
  const dayInWords = today.format("ddd");
  const monthInWords = today.format("MMM");
  const yearInFull = today.format("YYYY");
  const dateInNumber = today.format("D");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      // console.log("scorll", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  let scrollClass;
  let headerHeight;
  if (scroll < 100) {
    scrollClass = "logo-base";
    headerHeight = "450px";
  } else if (scroll > 100 && scroll < 200) {
    scrollClass = "logo-first";
    headerHeight = "400px";
  } else if (scroll > 200 && scroll < 300) {
    scrollClass = "logo-second";
    headerHeight = "300px";
  } else {
    scrollClass = "logo-last";
    headerHeight = "100px";
  }

  return (
    <>
      <div className="main-header" style={{ height: headerHeight }}>
        <div className="header">
          <div className="flex-items">
            <div className="nav-items">
              <span className="btn">HOME</span>
              <span className="btn">ABOUT</span>
              <span className="btn">CONTACT</span>
              <span className="btn">GITHUB</span>
            </div>
            {scrollClass != "logo-last" && scrollClass != "logo-second" && (
              <div className="date-items">
                <span>{dayInWords.toUpperCase()}</span>
                <span> , {monthInWords.toUpperCase()}</span>
                <span> , {dateInNumber}</span>
                <span> , {yearInFull}</span>
              </div>
            )}
            <div className="icon-items">
              <span>
                <AiOutlineUser />
              </span>
              <span>
                <BsHandbag />
              </span>
            </div>
          </div>
        </div>
        <div className={scrollClass}>
          <span className="sp1">food</span>
          <span className="sp2">Lads</span>
        </div>
      </div>
      {/* {console.log("test")} */}
    </>
  );
};

export default Header;
