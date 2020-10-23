import React from 'react';
import {Link} from 'react-router-dom'

const BookSnippet = (props) =>{
        return(
        <div className="BookSnippet">
            <img src={props.img}></img>
            <h1> {props.title}</h1>
            <h2> $ {props.price}</h2>
            <Link to={`/book/${props.id}`} key={props.id} >
                <button className="btn">More Details</button>
            </Link>
        </div>




)
           
}
export default BookSnippet;