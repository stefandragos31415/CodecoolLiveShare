import React from "react";

function Card(props) {

    // ---- VARIANTA COMPLICATA:
    // const replaceK = function () { // ???

    //     let splitArray = props.user.followers.toString().split('');
    //     console.log(splitArray);
    //     let finalFolowers = splitArray.slice(0, splitArray.length - 3).toString().split(',') + 'K';

    //     return finalFolowers
    // }

    return (
        <section className="platform">
            <div className="icon" >
                <img src={props.icon}></img>
                <p>{props.user.name}</p>
            </div>
            <div className="followers">
                <button onClick={() => props.minusButton(props.user)} className="update-followers-button">-</button>
                {props.user.followers > 9999 ? Math.floor(props.user.followers / 1000) + 'K' : props.user.followers}
                <button onClick={() => props.plusButton(props.user)} className="update-followers-button">+</button>
            </div>
            <div className="subscribers">
                F O L O W E R S
            </div>
            <div>
                <span className={props.user.difference < 0 ? 'trend-descend' : 'trend-ascend'}>
                    {props.user.difference < 0 ? '▼' : '▲'}
                </span>
                {props.user.difference}
            </div>
        </section>
    )
}

export default Card;