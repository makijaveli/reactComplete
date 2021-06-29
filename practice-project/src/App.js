import AddUser from "./components/Users/add-user.component";
import UserList from "./components/Users/user-list.component";
import {useState} from "react";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (name, age) => {
        setUserList((prevState) => {
            return [...prevState, {name: name, age: age, id: Math.random().toString()}]
        });
    }
    return (
        <>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </>
    );
}

export default App;
