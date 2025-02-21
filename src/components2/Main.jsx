import React from 'react'
import Navibar from './Navibar'
import "./Main.css"

const Main = () => {
  return (
    <div>
      <h1> <Navibar/></h1>


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"> */}
                {/* <span class="navbar-toggler-icon"></span> */}
            {/* </button> */}
            <div class="navbar-nav" id="navbarNav">
                <ul class="navbar-text">
                    <li class="nav-item"><a class="nav-link" href="#">ホーム</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">授業情報</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">お知らせ</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">設定</a></li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Main
