import React from 'react';

const BookSnippet = (props) =>{
        return(
        <div className="BookSnippet">
            <img src={props.img}></img>
            <h1> {props.title}</h1>
            <h2> $ {props.price}</h2>
            <button className="btn">More Details</button>
        </div>




)
           
}
export default BookSnippet;