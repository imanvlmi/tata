import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../lib/types";
import { Button } from "antd";
import { AppDispatch } from "../login/types";
import { loginUpdate } from "../../lib/features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector((store: IStore) => {
    return store.auth.isLoggedIn;
  });

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
    dispatch(loginUpdate(false));
  };

  console.log(isLoggedIn);
  return (
    <>
      <div className={styles.headerWrapper}>
        <Link className={styles.navLink} to={"/"}>
          Home
        </Link>
        <Link className={styles.navLink} to={"/profile"}>
          Profile
        </Link>
        <Link className={styles.navLink} to={"/about"}>
          About
        </Link>
        {isLoggedIn ? (
          <Button type="text" className={styles.button} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link to={"/login"} className={styles.navLink}>
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;
