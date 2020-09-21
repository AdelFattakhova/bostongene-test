import React from "react";
import PostingsList from "./PostingsList";
import Form from "./Form";
import {retrieveData} from "../postingsData";
import {saveData} from "../postingsData";
import {deleteData} from "../postingsData";

class MainContent extends React.Component {
    constructor() {
        super();
        this.postings = retrieveData();
        this.state = {
            postings: this.postings
        };
        this.saveNewPosting = this.saveNewPosting.bind(this);
        this.deletePosting = this.deletePosting.bind(this);
    }

    saveNewPosting(title, content, phoneNumber, city) {
        document.getElementById('form').reset();
        document.getElementById('title-input').value = '';
        document.getElementById('content-input').value = '';
        document.getElementById('phone-input').value = '';
        document.getElementById('city-select').value = '';

        const newPosting = {
            id: this.state.postings.length + 1,
            title: title,
            content: content,
            phoneNumber: phoneNumber,
            city: city
        };
        saveData(newPosting);
        this.setState(() => {
            const newPostings = retrieveData();
            return {
                postings: newPostings
            };
        })
    }

    deletePosting(id) {
        deleteData(id);
        this.setState(() => {
            const newPostings = retrieveData();
            return {
                postings: newPostings
            };
        })
    }

    render() {
        return (
            <main className='main'>
                <PostingsList postings={this.state.postings} deletePosting={this.deletePosting}/>
                <Form saveNewPosting={this.saveNewPosting}/>
            </main>
        )
    }
}

export default MainContent
