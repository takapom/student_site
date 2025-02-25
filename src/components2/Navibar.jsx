import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faBars, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Navibar.css"
import Calendar from './Calendar'




const Navibar = () => {
  return (
    <>

    <div className='first-commnet'>
      <p className='hello'>大和大学の情報学部の生徒向けの<span>ポータルサイトを作成しました！！</span></p>
      <p className='hello'>新しい機能を随時追加していきます！</p>
      <p className='hello'>使い方はメニューバーから見てください！</p>
    </div>
     

   <div className='container-new'>
    <div className='new-make'>
      <h1>更新内容</h1>
      <p>2/24；掲示板のバグ修正</p>
      <p>2/24：教科書売買システムのバグ修正</p>
      <p>2/24：ログインバグ修正</p>
      <p>2/25：就活情報の記載</p>
    </div>
  </div>

  <Calendar />

    <section className='study-syukatu-container'>
    <div className='study-container'>
      <p>Programing</p>
        <button>check</button>
      </div>

      <div className='syukatu-container'>
        <p>job hunting</p>
        <button>check</button>
      </div>
    </section>

  

    <div className='footer-container'>
    <footer className='footer'>
        <p>開発者：髙木　優希</p>
        <p>技術スタック：React、Next.js、boostrap</p>
      </footer>
      </div> 

    </>
    

  )
}

export default Navibar
