import React from "react";
import axios from "axios";


class GitUser extends React.Component{

    state = {
        bananas: [],
    };

    componentDidMount(){
        axios
        .get("https://api.github.com/users/jessejohns-1")
        .then ((res) => {
            this.setState({
                bananas: res.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }




    render(){
        return(
            <div className="daddycool">
                <div className="box">
                <h2>Name:{this.state.bananas.login}</h2>
                </div>
                <div className="box">
                <h2>Created At:{this.state.bananas.created_at}</h2>
                </div>
                <div className="box">
                <h2>Last Updated:{this.state.bananas.updated_at}</h2>
                </div>
                <div className="box">
                <h2>Followers:{this.state.bananas.followers}</h2>
                </div>
                <div className="box">
                <h2>Following:{this.state.bananas.following}</h2>
                </div>
            </div>
        )
    }
}



export default GitUser