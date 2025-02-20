import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({IsAuth}) => {
  return (
    <nav>
      <Link to="/">
      <FontAwesomeIcon icon={ faHouse } />
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
        <FontAwesomeIcon icon={ faFilePen } />
        投稿</Link>
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
