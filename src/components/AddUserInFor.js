import React, { useState } from "react";

// class AddUserInFor extends React.Component {
//     state = {
//         name: "thanh huy",
//         address: "ho chi minh",
//         age: 19,
//     }

//     handleClick = (event) => {
//         console.log(">>> click my button");
//         console.log("my name is", this.state.name);
//         this.setState({
//             name: "huy ga",
//         })
//     }

// handleOnChange = (event) => {
//     this.setState({
//         name: event.target.value,
//     })    
// }

// handleOnChangeAge = (event) => {
//   this.setState({
//     age: event.target.value,
//   })
// }

// handleSubMit = (event) => {
//     event.preventDefault();

//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random() * 100) + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
// }


//   render() {
//     return (
//       <div>
//         my name is {this.state.name} and age: {this.state.age}
//         <form
//           onSubmit={(event) => {
//             this.handleSubMit(event);
//           }}
//         >
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => {
//               this.handleOnChange(event);
//             }}
//           />
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => {
//               this.handleOnChangeAge(event);
//             }}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInFor = (props) => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  


const handleOnChange = (event) => {
    setName(event.target.value);
}

const handleOnChangeAge = (event) => {
  setAge(event.target.value);
}

const handleSubMit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor((Math.random() * 100) + 1) + "-random",
      name: name,
      age: age,
    });
}

    return (
      <div>
        my name is {name} and age: {age}
        <form
          onSubmit={(event) => {
            handleSubMit(event);
          }}
        >
          <input
            value={name}
            type="text"
            onChange={(event) => {
              handleOnChange(event);
            }}
          />
          <input
            value={age}
            type="text"
            onChange={(event) => {
              handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }

export default AddUserInFor;
