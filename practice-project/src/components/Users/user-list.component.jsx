import React from 'react';
import Card from "../UI/card.component";

const UserList = ({users}) => {
    return (
        <Card>
            <ul>
                {users.map(({name, age, id}) => {
                    return <li key={id}>{name} ({age} years old)</li>
                })}
            </ul>
        </Card>
    );
};

export default UserList;