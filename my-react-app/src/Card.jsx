import profilepic from './assets/ha.jpg'

function Card(){

    
    return(
        <div className="card">
            <img src={ profilepic } alt="Profile image" className="image" />
            <h2 className="card-title">Hannes</h2>
            <p className="card-text">Student at yrgo and play video games</p>
        </div>
    );
}

export default Card