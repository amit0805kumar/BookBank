import React, { Component } from 'react';
import BookItem from '../BookItem'
import axios from 'axios'
class List extends Component {
    state = {
        books: [],
        error: null
    }

    componentDidMount() {

        axios.get("http://localhost:5000/api/books",
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
                proxy: {
                    host: '104.236.174.88',
                    port: 3128
                }
            }).then(
                result => {
                    this.setState({
                        books: result.data
                    });
                },

                error => {
                    this.setState({
                        error
                    });
                }
            );
    }


    render() {
        return <React.Fragment>
            <div className="bookContainer">
                {this.state.books.map(book => (
                    <BookItem key={book.bookID} book={book} />
                ))}
            </div>
        </React.Fragment>
    }


}

export default List;