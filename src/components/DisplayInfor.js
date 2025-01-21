import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
  const { listUser } = props; // object
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  
  const handleShowHide = () => {
    setShowHideListUser(!isShowHideListUser);
  }

  console.log(">>> call me render");

  useEffect(() => {
    if (listUser.length === 0) {
      alert("you deleted all the users");
    }
    console.log("call me useEffect");
  },[listUser])

    return (
      <div>
        <div>
          <span onClick={() => handleShowHide()}>
            {isShowHideListUser === true ? "Hide list user" : "Show list user"}
          </span>
        </div>
        {isShowHideListUser && (
          <>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                  <div>my name is {user.name}</div>
                  <div>my age is {user.age}</div>
                  </div>
                  <div>
                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                  </div>
                  <hr />
                </div>
                
              );
            })}
          </>
        )}
      </div>
    );
}

export default DisplayInfor;
