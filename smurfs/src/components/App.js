import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux"
import { getApi } from "../Actions/actions"
import Input from "../components/Input"

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick={() => {
          this.props.getApi()
        }}>Get Smurfs</button>
        {this.props.api.map(data =>
          <div key={data.id}>
            <h1>{data.name}</h1>
            <p>Age: {data.age}</p>
            <p>Height: {data.height}</p>
          </div>
        )}
        <Input />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { api: state.api }
}

export default connect(mapStateToProps, { getApi })(App);
