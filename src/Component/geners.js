import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Geners = ({ video, setfilter }) => {

  const data = video;


  // handleSearch use for search according to tags
  const handleSearch = (value) => {
    const input = value.toLowerCase();
    let res = [];
    res = data.filter((d) => {
      return d.tags.toLowerCase().search(input) !== -1;
    })
    setfilter(res);

  };


  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>

          <Button variant="secondary" onClick={() => handleSearch("")} size="sm">   All       </Button>
          <Button variant="secondary" onClick={() => handleSearch("Action")} size="sm">   Action       </Button>
          <Button variant="secondary" onClick={() => handleSearch("Love")} size="sm">  Love        </Button>
          <Button variant="secondary" onClick={() => handleSearch("Thriller")} size="sm">  Thriller        </Button>

        </Container>
      </Navbar>

    </>
  )
}
export default Geners;