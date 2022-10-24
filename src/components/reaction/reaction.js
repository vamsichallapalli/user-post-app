import React from 'react';
import { emojiCount } from '../../Redux/slices/postsSlice';
import { useDispatch } from 'react-redux';
const reactionEmoji = {
    wow:"😮",
    heart:'❤',
    thumbsUp:"👍",
    cofee:"☕",
    rocket:"🚀"
}

const Reaction = ({reactionCount}) => {
    const dispatch = useDispatch()
    const OnEmojiCount = (event) =>{
       
      dispatch(emojiCount(
        {post_id :reactionCount.id,
        reactionName:event.target.value
    }
     
      ))
    }
const emojiRender = Object.entries(reactionEmoji).map(([name,emojitype])=>{
        return (
            <button style = {{backgroundColor:"transparent",border:"none",marginRight:"8px",fontSize:"18px"}}key = {name} value = {name} onClick = {OnEmojiCount} >
                {emojitype}{reactionCount.reactions[name]}
               
            </button>
        )
    })

  return (
    
    <div>
      {emojiRender}
    </div>
  )
}

export default Reaction
