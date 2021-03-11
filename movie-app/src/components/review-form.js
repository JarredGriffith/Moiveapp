import React from 'react'; 


export default class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '', 
            rating: '',
            review: '',
            movie:'', 
        }
    }
    render(){
        return(
            <form className="container">
                <div className="form-group col-md-4">
                    <label for="inputstate">Movie Name</label>
                    <select id="inputstate" className="form-control">
                        <option selected>Choose...</option>
                        <option>The Shining</option>
                        <option>Tropic Thunder</option>
                    </select>
                    <label for="StarRating">Star rating</label>
                    <select id="StarRating" className="form-control">
                        <option selected>Rating...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                    </select>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-danger">Enter New Employee</button>
                </div>
            </form>
        );
    }
}