import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'
import { useSelector } from 'react-redux'
import { Authors } from '../../Redux/slices/postsSlice'

const PostAuthor = ({authorName,timeStamp}) => {
    const users = useSelector(Authors)
    const findAuthor = users.find(user => user.name === authorName)
    const date = parseISO(timeStamp)
    const timePeriod = formatDistanceToNow(date)
    const timeAgo = `${timePeriod} ago`
  return (
    <>
     <span>
       by {findAuthor ? findAuthor.name:'Unknown author'}
    
    </span>
    <i>
       {` ${timeAgo}`}
    </i>
    </>
   
  )
}

export default PostAuthor
