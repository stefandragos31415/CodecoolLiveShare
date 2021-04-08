import React from 'react';
import './App.css';
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";

function App() {
    console.log(data)
    return (
        <div className="root">
            <div className="header">
                Social Media Dashboard
                <div className="sub-header">
                    Total followers: 33
                </div>
            </div>

            <section className="platform">
                <div className="icon" >
                    <img src={data.icon}></img>
                    <p>{data.users[0].name}</p>
                </div>
                <div className="followers">
                    <button className="update-followers-button">-</button>
                    {data.users[0].followers}
                    <button className="update-followers-button">+</button>
                </div>
                <div className="subscribers">
                    F O L O W E R S
                </div>
                <div>
                    <span className='trend-ascend'>▼</span>
                    <span className='trend-descend'>▼</span>
                    {data.users[0].difference}
                </div>
            </section>

            <AddNewCard></AddNewCard>
        </div>
    )
}


export default App;
