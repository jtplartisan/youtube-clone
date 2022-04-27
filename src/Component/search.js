import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ video, setfilter }) => {

    const data = video;
    const handleSearch = (event) => {
        const input = event.target.value.toLowerCase();
        let res = [];
        res = data.filter((d) => {
            return d.title.toLowerCase().search(input) !== -1;
        })
        setfilter(res);

    };

    return (
        <>
            <Form.Control size="lg" type="text" placeholder="Search Here" onChange={(e) => handleSearch(e)} />
        </>
    )
}
export default Search;