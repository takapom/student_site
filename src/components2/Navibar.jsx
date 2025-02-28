import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket, faBars, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Navibar.css"
import Calendar from './Calendar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';






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
      <p>2/24：教科書売買システムのバグ修正</p>
      <p>2/24：ログインバグ修正</p>
      <p>2/25：就活情報の記載</p>
      <p>2/25：プログラミング言語の追記</p>
    </div>
  </div>

  <Calendar />

    <section className='study-syukatu-container'>
    <div className='study-container'>
      <p>Programing</p>
      <Link to="/program">
      <button>check</button>
      </Link>
      </div>

      <div className='syukatu-container'>
        <p>job hunting</p>
        <Link to="/hunthing">
        <button>check</button>
        </Link>
      </div>
    </section>

  

    {/* <div className='footer-container'>
    <footer className='footer'>
        <p>開発者：髙木　優希</p>
        <p>技術スタック：React、Next.js、boostrap</p>
      </footer>
      </div>  */}
          <footer class="footer">
            <div class="footer-container">
            <div class="footer-logo">
                <h2>YamatoWeb</h2>
                <p>© 2025 MyWebsite. All Rights Reserved.</p>
            </div>

          
            <div class="footer-nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a>
                <a href="https://github.com/takapom" target="_blank" rel="noopener noreferrer" className=''>
                <i className="bi bi-github" style={{ fontSize: '30px', color: 'white' }}></i>
                </a>
                </a>
            </div>


            <div class="footer-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </footer>

    </>
    

  )
}

export default Navibar
