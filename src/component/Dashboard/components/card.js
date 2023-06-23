import '../static/css/card.css';

const Card = ({Id,Name,avaTar}) => {

    
    
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-lg-6 head headid"><div className="id">{Id}</div></div>
            </div>
            <div className="row subhead">
                <div className="col-lg-12 coursename">
                    <img src={avaTar}></img>
                </div>
            </div>
            <div className="row subhead">
                <div className="col-lg-12 coursename">{Name}</div>
            </div>
            
        </div>
    );
}



export default Card;