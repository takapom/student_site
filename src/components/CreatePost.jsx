import React from 'react';
import { useState } from 'react';
import "./CreatePost.css";
import {addDoc, collection} from "firebase/firestore"
import {db, auth} from "../firebase"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const createPost = async() => {
    window.alert("投稿しました！")
    setTitle("")
    setPostText("")
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText, 
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid


      }
    })
  };

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
      <h1 className=''>投稿する</h1>
       <div className='inputPost'>
        <div>タイトル</div>
        <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='inputPost'>
        <div>投稿</div>
        <textarea placeholder='投稿内容を記入'  onChange={(e) => setPostText(e.target.value)}></textarea>
      </div>
      <button className='postButton' onClick={createPost}>投稿する</button>
    </div>
 </div>
  )
}

export default CreatePost;
