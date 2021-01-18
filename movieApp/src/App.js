import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MovieList from "./Component/MovieList";
import AddMovie from "./Component/AddMovie";
import Filter from "./Component/Filter";
import Rate from "./Component/Rate";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetail from "./Component/MovieDetail";

class App extends React.Component {
  state = {
    movieliste: [
      {
        title: "The invisible guest",
        rate: 2,
        description:
          "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.",
        trailer: "epCg2RbyF80",
        image: "./assets/the invisible guest.jpg",
      },
      {
        title: "The body",
        rate: 4,
        description:
          "The corpse of a powerful businesswoman disappears from the morgue in the middle of the night! The inspector in charge of the resolution of this investigation discovers much more damning the widower of the victim ...",
        trailer: "4f9jIdg4rTQ",
        image: "./assets/the body.jpg",
      },
      {
        title: "Titanic",
        rate: 3,
        description:
          "Southampton, April 10, 1912. The largest and most modern ocean liner in the world, renowned for its unsinkable nature, the “Titanic” sets sail for its maiden voyage. Four days later, it hits an iceberg. On board, a poor artist and a big bourgeois fall in love.",
        trailer: "kVrqfYjkTdQ",
        image: "./assets/titanic.jpg",
      },
    ],
    searchInput: "",
    searchRatee: 0,
  };

  filtrer = (searchInput) => this.setState({ searchInput: searchInput });

  filterByRate = (searchRatee) => this.setState({ searchRatee: searchRatee });

  addmovie = (newmovie) => {
    this.setState({
      movieliste: [...this.state.movieliste, { ...newmovie }],
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <h1>100 of the Most Popular Movies of All Time </h1>

              <Navbar bg="light" expand="lg">
                <Navbar.Brand id="navitems" href="#home">
                  FilmStreaming
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link id="navitem" href="#home">
                      Home
                    </Nav.Link>
                    <Nav.Link id="navitem" href="#link">
                      Film
                    </Nav.Link>
                    <Nav.Link id="navitem" href="#link">
                      Series
                    </Nav.Link>
                    <Nav.Link id="navitem" href="#link">
                      Manga
                    </Nav.Link>
                    <NavDropdown title="Genre" id="basic-nav-dropdown">
                      <NavDropdown.Item id="navitem" href="#action/3.1">
                        Thriller
                      </NavDropdown.Item>
                      <NavDropdown.Item id="navitem" href="#action/3.2">
                        Romance
                      </NavDropdown.Item>
                      <NavDropdown.Item id="navitem" href="#action/3.3">
                        Drama
                      </NavDropdown.Item>
                      <NavDropdown.Item id="navitem" href="#action/3.4">
                        Aventure
                      </NavDropdown.Item>
                      <NavDropdown.Item id="navitem" href="#action/3.5">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Filter filtrer={this.filtrer} />
              <Rate filterByRate={this.filterByRate} />
              <AddMovie addmovie={this.addmovie} />

              <MovieList
                searchRatee={this.state.searchRatee}
                searchInput={this.state.searchInput}
                movieliste={this.state.movieliste}
              />
            </div>
          </Route>
          <Route
            path="/:Title/:Description/:Trailer"
            component={MovieDetail}
          />
        </Switch>
     
      </Router>
    );
  }
}

export default App;
