import React from 'react';

class Posting extends React.Component {
    render() {
        const tel = `tel:${this.props.posting.phoneNumber}`;

        return (
            <li className='posting'>
                <div className='posting__header'>
                    <h2 className='posting__title'>{this.props.posting.title}</h2>
                    <button className='posting__delete-btn'
                            onClick={() => this.props.deletePosting(this.props.posting.id)}>Удалить</button>
                </div>
                <p className='posting__content'
                   style={{display: this.props.posting.content ? 'block' : 'none'}}>{this.props.posting.content}</p>
                <span className='posting__city'
                      style={{display: this.props.posting.city ? 'block' : 'none'}}>{this.props.posting.city}</span>
                <a href={tel} className='posting__phone'>{this.props.posting.phoneNumber}</a>
            </li>
        )
    }
}

export default Posting
