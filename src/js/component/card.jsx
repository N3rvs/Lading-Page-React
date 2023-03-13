import React from "react";


export function Card({imageUrl,cardText,cardTitle,buttonUrl,buttonLabel}){
    return (
    <div className="col-md-3 p-5">
        <div className="card" >
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href={buttonUrl} target="_blank" className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    </div>
)};

