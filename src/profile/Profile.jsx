import React from "react";
// import myPhoto from "./photo.jpg";
// import ProfilePhoto from "./photo/ProfilePhoto";


export default function Profile({name, work, description}) {
    const fonts = {fontSize:"11px"}
    // const photo = function img () { return <img src = {myPhoto} alt='myPhoto'/>}

    return(
        <div className="container mt-5">
        <div className="row d-flex justify-content-center">
        <div className="col-md-7">
        <div className="card p-3 py-4">
            {/* <div className="text-center"> <ProfilePhoto image={photo}/> </div> */}
        <div className="text-center mt-3">
            <h5 className="mt-2 mb-0">{name}</h5> <span>{work}</span>
        </div>
        <div className="px-4 mt-1">
            <p style={fonts}>{description}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}