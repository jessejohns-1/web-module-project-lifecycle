import React from "react"
import Followers from "./Followers";
import GitUser from "./GitUser";


class App extends React.Component{
  
state = {};

componentDidMount() {};

render() {
  return(
    <div>
      <h1>Githubby User Cards</h1>
      <GitUser/>
      <Followers/>
    </div>
  )
}


}
export default App;
