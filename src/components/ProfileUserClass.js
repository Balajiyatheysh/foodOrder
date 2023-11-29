import { Component } from "react";
import SocialProfileClass from "./SocialProfileClass";

class ProfileUserClass extends Component{
  constructor (props){
    super(props)
  }

  componentDidMount(){
    console.log("ProfileuserClass componentdidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("commponentWillUnmount")
  }
  render(){
    const {name, html_url, avatar_url, bio}= this.props.data;
    console.log("ProfileUserClass child render");
    <div className="profile-user-card">
      <a href={html_url} target="_blank" rel="noopener noreference">
        <img src={avatar_url} alt={name} title={name} className="profile-user-image" />
      </a>
      <p className="profile-user-bio">
        <SocialProfileClass/>
      </p>
    </div>
  }
}

export default ProfileUserClass