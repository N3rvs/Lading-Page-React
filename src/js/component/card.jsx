import React from "react";


export function Card({imageUrl,cardText,cardTitle,buttonUrl,buttonLabel}){
    return (
        <div className="col-xl-3 col-md-6 col-sm-12 my-5">
        <div className="card h-100">
            <img  className="card-img-top" src={imageUrl}  alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">
                    {cardText}
                </p>
            </div>
            <div className="border text-center">
                <a href={buttonUrl} className="btn btn-warning m-2">
                    {buttonLabel}
                </a>
            </div>
        </div>
    </div>
)};

