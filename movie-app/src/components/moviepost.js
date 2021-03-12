import React from 'react'; 
import Movie from './movie'
import ReviewForm from './review-form'


export default class Moviepost extends React.Component {
    constructor(props) {
        super(props); 
        this.state  = [{
            name:"The Shining", 
            release:"5/13/1980",
            reviews: [{
                rating: '5',
                review: 'dfg',
                movie:'test', }, 
                {
                    rating: '7',
                    review: 'dfg',
                    movie:'test', }]
        }, {
            name:"Tropic Thunder", 
            release:"5/13/1980",
            reviews: [{
                rating: '6',
                review: 'dfg',
                movie:'test', }],
        }
    ]
    this.addNewReview = this.addNewReview.bind(this)
    }

    addNewReview(review) {
        console.log(review.movie);
        for(let i of this.state) {
            if(i.name === review.movie) {
                console.log(i.reviews)
                const allReviews = i.reviews.slice(); 
                //this is the issue below. its when pushing to the state it brakes the map function.
                this.setState({reviews: [...allReviews,review]}) }
            }
        }

        // this.state.map(()=> { 
        //     if(this.state.name === review.movie) {
        //     const allReviews = this.state.reviews.slice(); 
        //     this.setState({reviews: [...allReviews,review]}) }
        // })

    //     const reviews = this.state.slice();
    //     console.log(this.state)
    //     // just generate a simple id for additions...
    //     // this.setState({ employees: [...employees, employee]});
    //     this.setState({ reviews: [...reviews, review]});
    // }

        render() {
            const moviecard  = this.state.map(movie => <Movie {...movie} key={movie.name}/>)
            return (
                <div>
                    <ReviewForm onSubmit={this.addNewReview} />
                    {moviecard}
                </div>
            )
        }
}