import React from 'react'; 


export default class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rating: '',
            review: '',
            movie:'', 
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    resetForm() {
        this.setState({
            rating: '',
            review: '',
            movie:'', 
        });
    }

    submitForm() {
        this.props.onSubmit(this.state);
        this.resetForm();
    }

      handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }


    render(){
        return(
            <div className="container">
                <div className="form-group col-md-4">
                    <label for="inputstate">Movie Name</label>
                    <select name="movie" id="inputstate" className="form-control" onChange={this.handleInputChange}>
                        <option selected>Choose...</option>
                        <option>The Shining</option>
                        <option>Tropic Thunder</option>
                    </select>
                    <label for="StarRating">Star rating</label>
                    <select name="rating" id="StarRating" className="form-control" onChange={this.handleInputChange}>
                        <option selected>Rating...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                    </select>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Review</label>
                            <textarea name="review" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleInputChange}></textarea>
                        </div>
                        <button className="btn btn-danger" onClick={this.submitForm}>Submit Review</button>
                </div>
            </div>
        );
    }
}