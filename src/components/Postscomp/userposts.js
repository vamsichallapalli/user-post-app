import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../../Redux/slices/postsSlice";
import { Authors } from "../../Redux/slices/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllPosts } from "../../Redux/slices/postsSlice";
import Reaction from "../reaction/reaction";
import PostAuthor from "../postauthor/postAuthor";
import React from 'react'
import "./hello.css"
import { useState } from "react";
const Userposts = () => {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState('')
  const [authorName,setAuthorName] = useState('')
    const postlist = useSelector(selectAllPosts)
    const AuthorsList = useSelector(Authors)
    const orderedPosts = postlist.slice().sort((a,b)=>b.Date.localeCompare(a.Date))
    const renderedPosts = orderedPosts.map(currentValue =>{
        return(
            <div key = {currentValue.id} className = "post-container">
            <h3>{currentValue.title}</h3>
            <p>{currentValue.content.substring(0,100)}</p>
            <PostAuthor authorName = {currentValue.auth} timeStamp = {currentValue.Date}/>
            <Reaction reactionCount = {currentValue}/>
            
            </div>
        )
    })
    const AuthorOptions = AuthorsList.map(CI => {
      return (
        <option key={CI.id} value = {CI.name}>{CI.name}</option>
      )
    })
    const buttonDisabled = Boolean(title) && Boolean(content)
  const dispatch = useDispatch()
  const  onSubmitPost = (event) =>{
  event.preventDefault()
  if(title && content){
  dispatch(postAdded({
    id:nanoid(),
    title:title,
    content:content,
    auth:authorName,
    Date:new Date().toISOString(),
    reactions:{wow:0,heart:0,thumbsUp:0,cofee:0,rocket:0}
  }))
  setTitle("")
  setContent("")
  }

  

 }
  return (
    <div className="background-container">
      <div>
        <h1>Add a New Post</h1>
        <form className="form-container">
          <div>
            <label htmlFor = "post-title">Post Title:</label><br/>
            <input type = "text" id = "post-title" value={title}  onChange = {event =>setTitle(event.target.value)}></input>
          </div>
          <div>
            <label htmlFor = "post-Author">Post Author:</label><br/>
            <select id = "post-Author" value={authorName} onChange={event => setAuthorName(event.target.value)}>
              <option value="">Choose Author</option>
              {AuthorOptions}
            </select>
          </div>
          
          <div>
            <label htmlFor = "post-content">Content:</label><br/>
            <textarea id = "post-content" name = "postcontent" value={content} onChange = {event =>setContent(event.target.value)}></textarea>
          </div>
          <div className="save-button">
            <button type="submit" onClick={onSubmitPost} disabled = {!buttonDisabled}>Save Post</button>
          </div>
        </form>
      </div>

      <h1>Posts</h1>
      {renderedPosts}

    </div>
  )

  }
export default Userposts
