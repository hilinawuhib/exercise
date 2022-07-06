import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MyMainpage = () => {
    const [images, setImages] = useState([])
    const [searchquery, setSearchquery] = useState("")

    const handleInput = (e) => {
        setSearchquery(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch("https://api.pexels.com/v1/search?query=" + searchquery + "&per_page=1")
            if (response.ok) {
                let data = await response.json()
                console.log(data.photos)
                setImages(data.photos)
            }
            else {
                console.log("error")
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="main-container">
            <InputGroup className="mt-3">
                <Form.Control
                    className="search-input"
                    onChange={handleInput}
                    value={searchquery}
                    placeholder="Search Here"
                    aria-label="search image here"
                    aria-describedby="basic-addon2"
                />
                <Button className="search-button" onClick={handleSubmit} variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            {images.map((img) => (
                <div className="sub-container" key={img.id}>
                    <a className="author-name" href={img.photographer_url}>{img.photographer}</a>
                    <img className="main-image " src={img.src.original} alt="image " />

                </div>
            ))}
        </div>
    )

}
export default MyMainpage;