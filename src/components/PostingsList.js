import React from "react";
import Posting from "./Posting";

class PostingsList extends React.Component {
    render() {
        let postings;

        if(this.props.postings){
            postings = this.props.postings.map(item => {
                return <Posting key={item.id} posting={item} deletePosting={this.props.deletePosting}/>
            })
        }

        return (
            <ul className='postings'>
                {postings}
            </ul>
        )
    }
}

export default PostingsList
