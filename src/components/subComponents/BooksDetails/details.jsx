import React ,{useState, useEffect}from 'react';
import api from '../../mockAPI/mock_api';
import './style.css';

function Details(props){
    const {id} = props.match.params
    console.log(props);

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [content, setContent] = useState('')
    const [Author, setAuthor] = useState('')

    
    useEffect(() =>{
        let book = api[id]
        setTitle(book.title)
        setImg(book.imageUrl)
        setContent(book.content)
        setAuthor(book.Author)
    }, [id])

    return(
            <>
                <div className="Details">
                    <div className="container">
                    <div className="first-row">
                        <div className="row">
                            <div className="grid w-75 p-5 shadow-lg">
                            <div className="cards books-types">
                                <img src={img} style={{float: 'left'}} />  
                                <div className="card--details" style={{marginLeft: '300px'}}>
                                    <h1>{title}</h1> 
                                    <h6> By {Author}</h6> 
                                    <span>(30 reviews total)</span>
                                    <p>
                                        {
                                        content.split('\n').map((paragraph, indx) =>{
                                            return <p key={indx}>{paragraph} </p>
                                        })
                                        }
                                    </p>
                                    </div>
                                    
                                    </div>
            
                            </div>
                        </div>
                            
                    </div>
                    </div>
                </div>   
                <div className="about">
                  <div className="col-md-6">
                    <h1>About this book</h1>
                        <p>
                        {
                        content.split('\n').map((paragraph, indx) =>{
                            return <p key={indx}>{paragraph} </p>
                            })
                        }
                        </p>
                        <button>
                            Click Here to Download
                        </button>
                  </div>
                  </div>
            
            </>
          
         
                

    )
}
export default Details;