

const Card = ({avatar, name, repos, topRepo, repoUrl, remove, id}) => {
    return (
        <div key={1} className="row justify-content-center m-5">
                <div className="card col-8">
                    <div className="card-body">
                        <img className="card-img-top" src={avatar} alt="Card image cap"/>
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text text-center">Total Repos: {repos}</p>
                        <a href="#" className="card-link"
                            onClick={()=>remove(id)}
                        >Delete</a>
                            <a 
                            href="#" 
                            className="card-link"
                            onClick={() => topRepo(repoUrl)}
                            >
                            Pin top 3 repo's to nav
                            </a>
                    </div>
                </div>
        </div>
    )
}

export default Card;