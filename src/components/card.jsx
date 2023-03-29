import { useState, useEffect } from "react"


export default function Card(props) {

    return(
        <div className="card">
            <img alt='user-img' src={props.img} />
            <p>First Name: {props.first_name}</p>
            <p>Last Name: {props.last_name}</p>
            <p>Phone: {props.phone_number}</p>
            <p>Email: {props.email}</p>
            <p>Country: {props.address.country}</p>
            <p>SIN: {props.social_insurance_number}</p>
        </div>
    )
}

// https://randomuser.me/api/portraits/men/44.jpg

{/* <div>
            <img alt='user-img' src={props.img} />
            <p>First Name: {props.firstname}</p>
            <p>Last Name: {props.lastname}</p>
            <p>Phone: {props.phone_number}</p>
            <p>Email: {props.email}</p>
            <p>Country: {props.address}</p>
            <p>SIN: {props.social_insurance_number}</p>
        </div> */}