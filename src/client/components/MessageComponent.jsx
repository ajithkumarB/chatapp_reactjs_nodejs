import React, { Component } from 'react';

class MessageComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var user = this.props.user
        return(
            user.id ? <div className="message">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-3">
    <a href="#" className="person-one thumbnail">
      <img className="person-img-one" src={user.src} />
    </a>
            </div>
          </div>
          <h4 className="person-name"> {user.name} <span className="time">9:02 AM</span> </h4>
          <h5 className="person-text">
             {user.message}
          </h5>
        </div>
       </div>:null)
    }
}

export default MessageComponent

