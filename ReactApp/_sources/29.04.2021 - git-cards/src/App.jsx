import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/card';


const App = () => {
    const [gitUser, setGitUser] = useState("")
    const [cardList, setCardList] = useState([])
    const [favoriteRepoList, setFavoriteRepoList] = useState([])
    const [error, setError] = useState("")


    const addNewUser = () => {
        fetch (`https://api.github.com/users/${gitUser}`)
        .then((result) => result.json())
        .then((result) => {
            let exists = false;
            cardList.forEach((element) => {
                if(element.id === result.id){
                    exists = true;
                }
            })
            if (exists === false){
                cardList.push(result);
                setCardList([...cardList]);
            } else {
                setError("it existst");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const remove = (id) => {
        setCardList(cardList.filter((element) => element.id !== id));
    }

    const setFavoriteRepo = (repoUrl) => {
        console.log(repoUrl);
        fetch(repoUrl)
        .then((result)=> result.json())
        .then((result) => {
            console.log(result);
            let newArr = [];
            if( result.length === 0) {
                alert('No repositories');
            } else {
                for (let i = 0; i < 3; i++) {
                    newArr.push(result[i]);
                }
                setFavoriteRepoList(newArr);
            }
            console.log(favoriteRepoList);
        })
        .catch((err) => console.error(err))

    }

    return (
        <div>
            <div style={{position: 'fixed', top:0, width: '100%', zIndex: 1}}>
                <div className="row bg-info">
                    {favoriteRepoList.map(repo =>
                        <div className="col-4 text-center">{repo.name}</div>
                    )}
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input placeholder="enter github username" value={gitUser} onChange={e => setGitUser(e.target.value)}/>
                        <button onClick={addNewUser}>Add new user</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        {error ? error : ""}
                    </div>
                </div>
                {cardList.map((element) => (
                    <Card 
                        key={element.id}
                        id={element.id}
                        avatar={element.avatar_url}
                        name={element.name}
                        repos={element.public_repos}
                        topRepo={setFavoriteRepo}
                        repoUrl={element.repos_url}
                        remove={remove}
                    />
                ))}
            </div>
        </div>
    )
};

export default App;
