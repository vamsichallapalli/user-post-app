import { createSlice } from "@reduxjs/toolkit";
import { sub} from "date-fns";
const initialState = {
    value:[
        {id:1,title:"Learning Redux Toolkit",content:"I've heard good things",Date:sub(new Date(),{minutes:10}).toISOString(),reactions:{wow:0,heart:0,thumbsUp:0,cofee:0,rocket:0}},
        {id:2,title:"slices....",content:"The more I say slice,the more i want Pizza",Date:sub(new Date(),{minutes:10}).toISOString(),reactions:{wow:0,heart:0,thumbsUp:0,cofee:0,rocket:0}}
    ],
    postAuthors:[
        {id:1,name:"vamsi"},
        {id:2,name:"Rajesh"},
        {id:3,name:"srinu"},
        {id:4,name:"Ganesh"},
        {id:5,name:"Mahesh"},
    ],
     
}
const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded : (state,action) =>{
            state.value.push(action.payload)
        },
        emojiCount:(state,action) =>{
        const {post_id, reactionName} = action.payload
        const existingPost = state.value.find(value => value.id === post_id)
        existingPost.reactions[reactionName]++
        }

    }

})
export const selectAllPosts = state => state.posts.value
export const Authors = state => state.posts.postAuthors
export const {postAdded,emojiCount} = postsSlice.actions
export default postsSlice.reducer