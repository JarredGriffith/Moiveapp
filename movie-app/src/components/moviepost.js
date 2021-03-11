import React from 'react'; 
import Movie from './movie'
import ReviewForm from './review-form'


export default class Moviepost extends React.Component {
    constructor(props) {
        super(props); 
        this.state  = [{
            name:"The Shining", 
            release:"5/13/1980",
            review: {
    
            }
        }, {
            name:"Tropic Thunder", 
            release:"5/13/1980",
        }, 
        {
            name:"Tropic Thunder", 
            release:"5/13/1980",
        }
    
    ]
    }


        render() {
            const moviecard  = this.state.map(movie => <Movie {...movie} key={movie.name}/>)
            return (
                <div>
                    <ReviewForm/>
                    {moviecard}
                </div>
            )
        }
}