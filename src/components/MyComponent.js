// class components
// function components

import React, { useState } from "react";
import AddUserInFor from "./AddUserInFor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             {id: 1, name: "thanh huy", age: 18},
//             {id: 2, name: "thanh", age: 19},
//             {id: 3, name: "huy", age: 20},
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         console.log(userObj);
//         this.setState({
//             listUser: [userObj, ...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = [...this.state.listUser];
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUser: listUserClone,
//         })
//     }
//     render() {
//         return (
//             <>
//                 <AddUserInFor
//                 handleAddNewUser = {this.handleAddNewUser}
//                 />
//                 <DisplayInfor listUser={this.state.listUser}
//                 handleDeleteUser = {this.handleDeleteUser}
//                 />
//             </>
//         )
//     }
// }

const MyComponent = () => {
  const [listUser, setListUser] = useState([
      { id: 1, name: "thanh huy", age: 18 },
      { id: 2, name: "thanh", age: 19 },
      { id: 3, name: "huy", age: 20 },
  ]);
  const handleAddNewUser = (userObj) => {
    console.log(userObj);
    setListUser([userObj, ...listUser]);
  };
  const handleDeleteUser = (userId) => {
    let listUserClone = [...listUser];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(
        listUserClone,
    )
  };
  return (
    <>
      <AddUserInFor handleAddNewUser={handleAddNewUser} />
      <DisplayInfor
        listUser={listUser}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
};

export default MyComponent;
