import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faFilePen, faArrowRightToBracket, faComment,} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ IsAuth }) => {
  // 現在のURLパスを取得
  const location = useLocation();

  // パスが "/Main" のときは何も表示しない
  if (location.pathname === "/Main") {
    return null; 
  }

  return (
    <nav>
      <Link to="/Main">
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </Link>

      <Link to="/">
        <FontAwesomeIcon icon={faComment} />
        すべての投稿
      </Link>

      {!IsAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to="/createpost">
            <FontAwesomeIcon icon={faFilePen} />
            投稿
          </Link>

          <Link to="/logout">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
