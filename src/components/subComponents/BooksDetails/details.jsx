import React from 'react' ;

function Details(props){
    const {id} = props.match.params
    return(
        <h1>hello {id}</h1>
    )
}
export default Details;