import axios from "axios";
import React from "react"



class Followers extends React.Component {
    state = {
        followers: [],
    };

    componentDidMount(){
        axios.get("https://api.github.com/users/jessejohns-1/followers")
        .then((res) => {
           this.setState({
               followers: res.data
           })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div className="usercards">
              
               {this.state.followers.map((user) => {
                   return (
                       <div className="daddy">
                            <div className="boxes">
                           <h2>{user.login}</h2>
                           </div>
                           <div className="boxes">
                    <img src={user.avatar_url} alt="img"/>
                    </div>
                    <div className="boxes">
                    <h2>{user.repos_url}</h2>
                    </div>
                    </div>
                    )
               })}
            </div>
        )
    }
}
export default Followers;