import React from "react";
import axios from "axios";


class GitUser extends React.Component{

    state = {
        info: [{}],
    };

    componentDidMount(){
        axios
        .get("https://api.github.com/users/jessejohns-1")
        .then ((res) => {
            this.setState({
                info: res.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }




    render(){
        return(
            <div>
                <h2>{this.state.info.login}</h2>
            </div>
        )
    }
}



export default GitUser