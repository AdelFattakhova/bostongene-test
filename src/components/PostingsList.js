import React from "react";
import postingsData from "../postingsData";
import Posting from "./Posting";

function PostingsList() {
    const postings = postingsData.map(item => {
        return <Posting key = {item.id} posting = {item}/>
    })
    return (
        <ul className='postings'>
            {postings}
        </ul>
    )
}

export default PostingsList
