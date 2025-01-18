import React from "react";

// class DisplayInfor extends React.Component {

//   render() {
//     console.log(">>> call me render");
//     const { listUser } = this.props;
//     return (
//       <div>
        
//         {true && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                   <div>my name is {user.name}</div>
//                   <div>my age is {user.age}</div>
//                   </div>
//                   <div>
//                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                   </div>
//                   <hr />
//                 </div>
                
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser } = props; // object

    return (
      <div>
        {true && (
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
