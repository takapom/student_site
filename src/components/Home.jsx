import React, { useEffect, useState } from 'react';
import "./Home.css";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase"

const Home = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const getPost = async() => {
      const data = await getDocs(collection(db, "posts"))
      // console.log(data);
      // console.log(data.docs)
      // console.log(data.docs.map((doc) => ({doc})))
      // //データ関数
      // console.log(data.docs.map((doc) => ({...doc.data()})))
      setPostList(data.docs.map((doc) => ({...doc.data()})))
    }
    getPost()
  }, []);


  return (
    <div className='homePage'>
    {postList.map((post) => {
      return(
        <div className='postContents'>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
        <div className='postTextContainer'>
          {post.postText}
        </div>
        <div className='nameAndDeleteButton'>
        <h3>@{post.author.username}</h3>
        <button>削除</button>
        </div>
      </div>
      );
    })}
    </div>
  )
}

export default Home
