import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faBars, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navibar = () => {
  return (
    <nav>
     <Link to="/Main">
      <FontAwesomeIcon icon={ faHouse } size='2x'/>
      </Link>
    </nav>
  )
}

export default Navibar
