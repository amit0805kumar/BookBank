import React from 'react'
import PropTypes from 'prop-types'

const BookItem = ({ book }) => {

    let stars = [];
    for (var i = 0; i < book.average_rating; i++) {
        stars.push(<i className="material-icons">star</i>);
    }
    for (var j = 0; j < 5 - book.average_rating; j++) {
        stars.push(<i className="material-icons">star_border</i>);
    }

    return (
        <React.Fragment>
            <div className="bookBox">
                <div className="bookMain">
                    <div className="bookMain__left">
                        <div className="title">{book.title}</div>
                        <div className="author">{book.authors}</div>
                    </div>
                    <div className="lang">
                        {book.language_code}
                    </div> 
                </div>
                <div className="bookPerk">
                    <div className="price">Price: {book.price}</div>
                    <div className="avgRating">
                        {stars}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
}

export default BookItem
