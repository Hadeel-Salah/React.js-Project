import React from 'react';
import BookSnippet from './bookSnippet';
import api from '../../../mockAPI/mock_api';
import _ from 'lodash';

export default function ThirdSection(){
    return(
        <div className="ThirdSection">
            <h1>Most popuralr books </h1>
            <div className="books_container">
                <div className="container">
                    <div className="row">
            {
                _.map(api, (book , indx) => (
                   
                        <div className="col-md-3">
                                <BookSnippet
                                    key={indx}
                                    id={indx}
                                    title={book.title}
                                    img={book.imageUrl}
                                    content={book.content}
                                    price={book.price}
                                />
                    </div>
                    
                        
                
                ))
            }
            </div>
            </div>
        </div>
        </div> 
    )

}