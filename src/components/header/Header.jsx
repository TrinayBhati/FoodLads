import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-header">
        <div className="header">
          <div className="flex-items">
            <div className="nav-items">
              <span className="btn" onClick={() => navigate("/")}>
                HOME
              </span>
              <span className="btn" onClick={() => navigate("/menu/30308")}>
                ORDER IN
              </span>
              <span className="btn" onClick={() => navigate("/dishes")}>
                Dishes
              </span>
              <span className="btn">GITHUB</span>
            </div>
            <div className="header-text">
              <span className="sp1">food</span>
              <span className="sp2">Lads</span>
            </div>
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
      </div>
    </>
  );
};

export default Header;
