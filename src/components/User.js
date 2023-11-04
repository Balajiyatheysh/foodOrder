import React from "react";

class User extends React.Component{
  constructor(props){
      super(props);

      this.state={
        count:0,
        state2:1,
      }
  }

  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  decrement =()=>{
    this.setState({count:this.state.count -1});
  }
  render(){
    const {count, state2} = this.state
    return(
      <div className="user-component">
        <h3>UserComponent</h3>
        <h4>Balaji E</h4>
        <p>Professional dancer</p>
         <h6>
          {count}
          </h6>
          <h6>
            {state2}
          </h6>
          <button onClick={()=>{
            this.increment();
          }}>Increment</button>
          <button onClick={()=>{
            this.decrement();
          }}>Decrement</button>
      </div>
    )
  }
}
export default User;