import React, { useState } from 'react';
import './App.css';
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from './components/Header';
import Card from './components/Card';

function App() {

    const [userList, setUserList] = useState(data.users)

    function minusButton(user) {
        user.followers--
        setUserList([...userList])
    }

    function plusButton(user) {
        user.followers++
    }

    return (
        <div className="root">
            <Header users={data.users} />
            {
                userList.map((card) =>
                    <Card key={card.name}
                        user={card}
                        icon={data.icon}
                        plusButton={plusButton}
                        minusButton={minusButton}
                    />
                )
            }

            <AddNewCard></AddNewCard>
        </div>
    )
}


export default App;
