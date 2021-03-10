import React from 'react'; 
import Movie from './movie'


export default class Mociepost extends React.Component {
    constructor(props) {
        super(props); 
        this.state  = {
            name: props.name, 
            release : props.release,
            review: props.review
        }

        // let movies = [{
        //     name:"this shining",
        //     release: '5/20/1980', 
        //     review:[]
        // }, 
        // {
        //     name:"tropic Thunder", 
        //     release: "8/13/2008", 
        //     review:[]
        // }
        // ]
    }


        render() {
            let movies = [];
            if (this.state.name) {
                for(let movie of this.state.name ) {
                    movie.push(<Movie {...name}/>)
                }
            }

            return (
                <div>
                    <Movie/>
                </div>
            )
        }
}