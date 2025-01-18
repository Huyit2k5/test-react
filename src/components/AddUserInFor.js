import React from "react";

class AddUserInFor extends React.Component {
    state = {
        name: "thanh huy",
        address: "ho chi minh",
        age: 19,
    }

    handleClick = (event) => {
        console.log(">>> click my button");
        console.log("my name is", this.state.name);
        this.setState({
            name: "huy ga",
        })
    }

handleOnChange = (event) => {
    this.setState({
        name: event.target.value,
    })    
}

handleOnChangeAge = (event) => {
  this.setState({
    age: event.target.value,
  })
}

handleSubMit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUser({
      id: Math.floor((Math.random() * 100) + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
}


  render() {
    return (
      <div>
        my name is {this.state.name} and age: {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleSubMit(event);
          }}
        >
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInFor;
