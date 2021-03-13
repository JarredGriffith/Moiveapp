import React from 'react'; 

export default class Movie extends React.Component {
    render(){
        //maps through the reviews and sets up the cards.
        const reviewCard  = this.props.reviews.map(review => <div className="card"> <b>Star Rating:</b> {review.rating} <br></br> <b>Review:</b>{review.review}</div>)
       //get avg rating in the card header.
        const avgRating = () => {
           let total=0; 
           this.props.reviews.map(review => total+=parseInt(review.rating));
           return Math.trunc(total/ this.props.reviews.length) }
        
       
        //making the movie cards and the review cards.
        return(
            <div className="container">
            <div className="card">
            <div className="card-header bg-success text-white">
           <b>{this.props.name}</b> <br></br>relaese date : {this.props.release} <b> <br></br>Avg Rating:</b> {avgRating()}<br></br>
            </div>
            <div className="card-body btn-light">  <b>Over View of the movie</b> <br></br> {this.props.overview}</div>
            {reviewCard} 
            <div className="card-footer">
            </div>
        </div>
        </div>
        )
    }
}