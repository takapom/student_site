import React, { useEffect, useState } from 'react';
import "./Home.css";
import {collection, getDocs} from "firebase/firestore"
import {db} from "../firebase"
import {doc, deleteDoc} from "firebase/firestore"

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
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPost()
  }, []);

  const handleDelete = async(id) => {
    await deleteDoc(doc(db, "posts", id));
    //リロードしなくても勝手に消える
    window.location.href = "/"
    window.alert("削除しました！")
  };


  return (
    <div className='homePage'>
    {postList.map((post) => {
      return(
        <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
        <div className='postTextContainer'>
          {post.postText}
        </div>
        <div className='nameAndDeleteButton'>
        <h3>@{post.author.username}</h3>
        <button onClick={() => {handleDelete(post.id)}}>削除</button>
        </div>
      </div>
      );
    })}
    </div>
  )
}

export default Home
