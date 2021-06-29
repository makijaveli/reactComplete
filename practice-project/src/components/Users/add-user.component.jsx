import React, {useState} from 'react';
import Card from "../UI/card.component";
import './add-user.styles.css';
import Button from "../UI/button.component";
import ErrorModal from "../UI/error-modal.component";
import Wrapper from "../helpers/wrapper";

const AddUser = ({onAddUser}) => {

    // Initialize state
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        // Prevent default form behavior
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input!',
                message: 'Please enter valid name!'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input!',
                message: 'Please enter valid age!'
            })
            return;
        }
        console.log(enteredUsername, enteredAge);
        onAddUser(enteredUsername, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const usernameChangeHandler = ({target}) => {
        setEnteredUserName(target.value)
    }

    const ageChangeHandler = ({target}) => {
        setEnteredAge(target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} text={error.message} onSubmit={errorHandler}/>}
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;