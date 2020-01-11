import React from "react"

import Axios from "axios";



export default class Input extends React.Component {
   state = {
       name: '',
       age: 2,
       height: ''
   }
    
    handleNameChange = event => {
        this.setState({name: event.target.value})
    }

    handleAgeChange = event => {
        this.setState({age: event.target.value})
    }

    handleHeightChange = event => {
        this.setState({height: event.target.value})
    }

    handleSubmit = event => {
       event.preventDefault();

       const newSmurf = {
           name: this.state.name,
           age: this.state.age,
           height: this.state.height,
           id: Date.now()
       };
     console.log(newSmurf)
       Axios.post(`http://localhost:3333/smurfs`, newSmurf)
       .then(res => {
           console.log(res)
           console.log(res.data)
       })
       .catch(err => {
           console.log("error", err)
       })
   }

    render () {
        return(
            <div>
         <form onSubmit={this.handleSubmit}>
             <label>
                 Smurf Name: <input type="text" name="name"  onChange={this.handleNameChange} />
             </label>
             <label>
                 Smurf Age: <input type="number" name="age" onChange={this.handleAgeChange} />
             </label>
             <label>
                 Smurf Height: <input type="text" name="height"  onChange={this.handleHeightChange} />
             </label>
             <button type="submit">Add</button>
         </form>
        </div>
        )}
}

