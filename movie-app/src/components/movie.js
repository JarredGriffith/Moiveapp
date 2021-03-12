import React from 'react'; 

// {this.props.reviews.[0].rating} 
export default class Movie extends React.Component {
    render(){
        console.log(this.props.reviews)
        const reviewCard  = this.props.reviews.map(review => <div> {review.rating} {review.review}</div>)
        return(
            <div className="container">
            <div className="card w-75">
            <div className="card-header bg-success text-white">
            {this.props.name} relaese date : {this.props.release}
            </div>
            {reviewCard} 
            <div className="card-footer">
            </div>
        </div>
        </div>
        )
    }
}