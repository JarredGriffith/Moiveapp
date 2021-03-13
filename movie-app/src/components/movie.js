import React from 'react'; 

export default class Movie extends React.Component {
    render(){
        //maps through the reviews and sets up the cards.
        const reviewCard  = this.props.reviews.map(review => <div className="card"> <b>Star Rating:</b> {review.rating} <br></br> <b>Review:</b>{review.review}</div>)
        //making the movie cards and the review cards.
        return(
            <div className="container">
            <div className="card">
            <div className="card-header bg-success text-white">
           <b>{this.props.name}</b> relaese date : {this.props.release}
            </div> 
            {reviewCard} 
            <div className="card-footer">
            </div>
        </div>
        </div>
        )
    }
}