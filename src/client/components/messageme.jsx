import React, { Component } from 'react';

import MessageComponent from './MessageComponent'

import UserSelectionPopup from './UserSelectionPopup'
class MessageMeComponent extends Component{
    constructor(props){
        super(props)
        console.log("hi");
        this.state = {
            users: [{
                id:1,
                name: 'tendulkar',
                message: 'Hi',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/pexels-photo-119705%20(1).jpeg'
            },
            {
                id:2,
                name: 'ajit',
                message: 'Hi',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/pexels-photo-119705%20(1).jpeg'
            },
           ],
           messages: [{
                id:1,
                name: 'tendulkar',
                message: 'Hi',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/pexels-photo-119705%20(1).jpeg'
            },
            {
                id:2,
                name: 'ajit',
                message: 'Hi',
                src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/pexels-photo-119705%20(1).jpeg'
            },
           ],
           currentUser:{},
           inputValue: 'Sample message'
        }
        this.onUserSelect = this.onUserSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    handleChange(event){
        if (event.which == 13 || event.keyCode == 13) {
            //code to execute here
            this.addMessage(this.state.inputValue);
            return false;
        }
        this.setState({ inputValue: event.target.value })
    }

    onKeyDown(e){
        if (e.key === 'Enter') {
            this.addMessage(this.state.inputValue);
            this.setState({ inputValue: "" })
          }
    }

    onUserSelect=(user)=>{
       this.setState({currentUser:user});
    }

    addMessage = (message)=>{
        let messages = this.state.messages.concat({
            id:this.state.currentUser.id,
            name: this.state.currentUser.name,
            message:message,
            src:this.state.currentUser.src
        })
        this.setState({messages:messages});
    }

    render(){
        return(
            <div className="animated slideInLeft" className="square">    
                <div className="animated bounceInUp" className="leftSquare">
                    <div className="row">
                        <div className="col-lg-8">
                        <h1 className="title">MessageMe</h1>
                        </div>
                        <i className="down fa fa-chevron-down" aria-hidden="true"></i>
            
                        <i className="bell fa fa-bell-o fa-lg" aria-hidden="true"></i>
                    </div>
                    <div className="row">
                        <div className="circle"></div>
                        <h2 className="subtitle">{this.state.currentUser.name}</h2>
                    </div>
                    <div className="row">
                        <h2 className="channels">CHANNELS<span className="light">(29)</span>
                        <i className="add fa fa-plus-circle fa-inverse" aria-hidden="true"></i>
                        </h2>
                    </div>
                    <div className="highlight-channel"></div>
                    <div className="row">
                        <h2 className="channel"># birthday</h2>
                    </div>
                    <div className="row">
                        <h2 className="channel3"># introductions</h2>
                    </div>
                    <div className="row">
                        <h2 className="messages">DIRECT MESSAGES<span className="light">(12)</span> <i className="add-two fa fa-plus-circle fa-inverse"></i> </h2>
                    </div>
                    {
                       this.state.users.map((user,index)=>{
                           return  <div className="row">
                           <div className={"circle"+(index+2)}></div>
                           <h2 className={"subtitle"+(index+2)}>{user.name}</h2>
                       </div>
                       })
                    }
                </div>
                <div className="animated bounceInDown" className="header">
                    <h2 className="channel-title">
                            #pens
                    </h2>
                    <div id = "icons">
                        <i className="star fa fa-star-o" aria-hidden="true"></i>
                        <h3 className="line"> | </h3>
                        <i className="user fa fa-user-o" aria-hidden="true"></i>
                        <h3 className="line2"> | </h3>
                        <i className="pin fa fa-thumb-tack" aria-hidden="true"></i>
                    </div>
                    <div className="rightIcons">
                        <i className="phone fa fa-phone fa-lg" aria-hidden="true"></i>
                        <i className="cog fa fa-cog fa-lg" aria-hidden="true"></i>
                        <i className=" details fa fa-list-alt fa-lg" aria-hidden="true"></i>
                        <h3 className="line3"> | </h3>
                        <i className="search-glass fa fa-search" aria-hidden="true"></i>
                        <input className="search" placeholder="Search" type="text" >
                        </input>
                        <i className="at fa fa-at fa-lg" aria-hidden="true"></i>
                        <i className="star-o fa fa-star-o fa-lg" aria-hidden="true"></i>
                        <i className="menu fa fa-ellipsis-v fa-lg" aria-hidden="true"></i>
                    </div>
                    <hr className="bottom-header-line" />
                </div>
                <div className="message-area">
                   {
                     this.state.messages.map((message)=>{
                       return <MessageComponent user = {message} / >
                     })
                   }
                </div>
                {
                 this.state.currentUser.id ? <div className="bottom">
                    <input className="search-bottom"
                    value={this.state.inputValue}
                    onChange={this.handleChange} 
                    onKeyDown={this.onKeyDown} placeholder="Message #pens" type="text" >
                                </input>
                    <i className="smile fa fa-smile-o" aria-hidden="true"></i>
                    <h3 className="line-bottom"> | </h3>
                    <i className="plus fa fa-plus" aria-hidden="true"></i>
                 </div>:null
                }
                <UserSelectionPopup onUserSelect={this.onUserSelect} />
            </div>
        )
    }
}

export default MessageMeComponent

