import React from 'react'; 


export default class Movie extends React.Component {
    render(){
        return(
            <div className="container">
            <div className="card w-75">
            <div className="card-header bg-success text-white">
            {this.props.name} relaese date : {this.props.release}
            </div>
           <div className="card-body">
              text
           </div>
            <div className="card-footer">
            </div>
        </div>
        </div>
        )
    }
}