import React from "react";

class ProfileUserclass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            count:0,
          }
    }

    render(){

        const{name} = this.props;
        const{count} = this.state

        return ( <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>{count}</h3>
        <button onClick={() =>{
            this.setState({count: this.state.count + 1});
        }}>count increase</button>
        <h3>Location: Haryana</h3>
        <h4>Contact: shreyanshjain648@gmail.com</h4>
    </div>
    );
    }
}


export default ProfileUserclass;