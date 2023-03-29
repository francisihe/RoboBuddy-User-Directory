import { useState, useEffect } from "react";
import Card from './card'
import './styles.css'

export default function CardList(props) {
    return(
        <div className="cardlist">
            {props.user.map(eachUser => {
                return(
                    <Card 
                        key={eachUser.id}
                        img={eachUser.avatar} 
                        {...eachUser}
                    />)
            })}
        </div>
    )
}