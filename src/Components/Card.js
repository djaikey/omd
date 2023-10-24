import "../Styles/Card.css"
function Card() {
    return (
        <div className="Card">
            <img className="Photo" src="src/Asset/md.png" alt="Photo"/>
            <div className="info">
                <h1>Johanna.K</h1>
                <p>Marketing Digital</p>
                <p>Developpement web</p> 
            </div>
            
        </div>
    );
}

export default Card;