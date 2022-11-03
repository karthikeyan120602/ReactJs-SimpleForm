import React,{useState} from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {

  const  [usersList,setUsersList] = useState([]);

  const AddUserHandler = (uname,uage) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name:uname,age:uage,id:Math.random.toString()}];
    });
  };


  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
