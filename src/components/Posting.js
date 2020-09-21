import React from 'react';

class Posting extends React.Component {
    render() {
        const tel = `tel:${this.props.posting.phoneNumber}`;
        const contentStyles = {
            display: this.props.posting.content ? 'block' : 'none'
        };

        return (
            <li className='posting'>
                <h2 className='posting__title'>{this.props.posting.title}</h2>
                <p className='posting__content'
                   style={contentStyles}>{this.props.posting.content}</p>
                <span className='posting__city'>{this.props.posting.city}</span>
                <div className='posting__phone'>
                    <span className='posting__call-label'>Позвонить:</span>
                    <a href={tel} className='posting__phone'>{this.props.posting.phoneNumber}</a>
                </div>
                <button className='posting__edit-btn'>Редактировать</button>
                <button className='posting__delete-btn'
                        onClick={() => this.props.deletePosting(this.props.posting.id)}>Удалить</button>
            </li>
        )
    }
}

export default Posting
