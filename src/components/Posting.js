import React from 'react';

function Posting(props) {
    const tel = `tel:${props.posting.phoneNumber}`
    return (
        <li className='posting'>
            <h2 className='posting__title'>{props.posting.title}</h2>
            <p className='posting__content'
               style={{display: props.posting.content ? 'block' : 'none'}}>{props.posting.content}</p>
            <span className='posting__city'>{props.posting.city}</span>
            <div className='posting__phone'>
                <span className='posting__call-label'>Позвонить:</span>
                <a href={tel} className='posting__phone'>{props.posting.phoneNumber}</a>
            </div>
        </li>
    )
}

export default Posting
