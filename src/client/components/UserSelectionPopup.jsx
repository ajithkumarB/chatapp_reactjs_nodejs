import React, { Component } from 'react';

class UserSelectionPopup extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopup:true,
            users : [{
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
            checked: 'ajit'
        }
    }
     
    render(){
        return (
            this.state.showPopup ? 
            <div id="myModal" class="modal fade in show" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Select User</h4>
                </div>
                <div class="modal-body">
                {
                this.state.users.map((user)=>{
                  return (
                  <div className="radio">
                    <label><input onClick = {()=>{
                        this.props.onUserSelect(user)
                        this.setState({checked:user.name,showPopup:false })
                    }} type="radio" name="optradio" checked = {user.name === this.state.checked} ></input>{user.name}</label>
                  </div>
                  )
               })}
                </div>
              </div>
            </div>
          </div> : null
        )
    } 

}

export default UserSelectionPopup