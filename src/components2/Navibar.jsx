import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faBars, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Navibar.css"



const Navibar = () => {
  return (
    <>
     
    <div className='first-commnet'>
      <p className='hello'>大和大学の情報学部の生徒向けのポータルサイトを作成しました！</p>
      <p className='hello'>新しい機能を随時追加していきます！</p>
      <p className='hello'>使い方はメニューバーから見てください！</p>
    </div>
     

   <div className='container-new'>
    <div className='new-make'>
      <h1>更新内容</h1>
      <p>2/24；掲示板のバグ修正</p>
      <p>2/24：教科書売買システムのバグ修正</p>
      <p>2/24：ログインバグ修正</p>
    </div>
  </div>

     


    </>
    

  )
}

export default Navibar
