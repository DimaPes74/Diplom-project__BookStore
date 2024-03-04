import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Title from "../../components/components-shared/Title";
import { SvgSelector } from "../../components/components-shared/icons/SvgSelectors";



function AloneBook () {

    const [ aloneBook, setAloneBook ] = useState({});

    let { oneBook } = useParams();

    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/books/${oneBook}`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAloneBook(allPersons);
        });
    }, []);

    
    
    return (
        <div className="alone-card">
            <div className="alone-card__title">
                <button><SvgSelector id="ArrowLeft"/></button>
                <Title title={aloneBook.title}/>
            </div>
            <div className="alone-card__show-info">
                <div><img src={aloneBook.image} alt="#"></img></div>
                <ul>
                    <li><span>{aloneBook.price}</span><span>reating</span></li>
                    <li><span>Authors</span><span>{aloneBook.authors}</span></li>
                    <li><span>Publisher</span><span>{aloneBook.publisher}</span></li>
                    <li><span>Language</span><span>{aloneBook.language}</span></li>
                    <li><span>Format</span><span>pdf/eBook</span></li>
                    <li><input type="list"></input></li>
                    <li><button>add to cart</button></li>
                    <li><span>Preview book</span></li>
                </ul>
            </div>
            <ul>
                <li>Description</li>
                <li>Authors</li>
                <li>Reviews</li>
            </ul>
            <div className="alone-card__description">
                <p>{aloneBook.desc}</p>
                <p>{aloneBook.authors}</p>
                <p>Preview</p>
            </div>
            <div className="alone-card__links">
                links
            </div>
        </div>
    )
}

export default AloneBook