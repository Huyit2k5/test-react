// class components
// function components

import React from 'react';
import AddUserInFor from './AddUserInFor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    state = {
        listUser: [
            {id: 1, name: "thanh huy", age: 18},
            {id: 2, name: "thanh", age: 19},
            {id: 3, name: "huy", age: 20},
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser];
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserClone,
        })
    }
    render() {
        return (
            <>
                <AddUserInFor 
                handleAddNewUser = {this.handleAddNewUser}
                />
                <DisplayInfor listUser={this.state.listUser}
                handleDeleteUser = {this.handleDeleteUser}
                />
            </>
        )
    }
}
export default MyComponent;