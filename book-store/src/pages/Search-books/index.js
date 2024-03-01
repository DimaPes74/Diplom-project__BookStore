import { useEffect, useState } from "react"
import axios from "axios";
import Title from "../../components/components-shared/Title";

function SearchBooks () {

    const [ search, setSearch ] = useState([]);


    useEffect(() => {
        const apiUrl = `https://api.itbook.store/1.0/search/mongodb`;
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setSearch(allPersons.books)
        });
    }, []);

    console.log(search);

    return (
        <div className="search-books">
            <Title title="Search results"/>
            {
                search.length ?
                search.map((book) => {
                    return (
                        <div className="cards__wrapper">
                            <div><img src={book.image} alt="#"></img></div>
                            <h3>{book.title}</h3>
                            <span>{book.subtitle}</span>
                            <span>{book.price}</span>
                            <button onClick={''}>+</button>
                        </div>
                    )
                })
                :
                ''
            }
        </div>
    )
}

export default SearchBooks