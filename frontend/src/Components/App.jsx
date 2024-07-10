import React from "react";
import axios from "axios";
import "../Components/App.css";

import PlayerForm from "./Player/PlayerForm";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
// import NavBars from "./Header/NavBars";
import Navbars from "./Header/NavBars";
import Hero from "./Hero/Hero";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManagePlaye from "./Player/ManagePlaye";
// import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
// import Header from "./Header/header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
  
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000/players";

    axios
      .get(url)
      .then((Response) => {
        console.log(Response);
        this.setState({
          players: Response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  deletePlayer(item) {
    const url = `http://localhost:4000/player/${item._id}`;
    axios
      .delete(url)
      .then((Response) => {
        console.log(Response);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        {/* <NavBars /> */}
        <Navbars />

        <Routes>
          <Route
            path="/manage"
            element={
              <ManagePlaye
                players={this.state.players}
                updateCurrentPlayer={this.updateCurrentPlayer}
                deletePlayer={this.deletePlayer}
              />
            }
          />
          <Route
            path="/add"
            element={
              <>
                <PlayerForm />
              </>
            }
          />
          <Route
            path="/view"
            element={
              <PlayerList
                players={this.state.players}
                updateCurrentPlayer={this.updateCurrentPlayer}
              />
            }
          />
          <Route path="/" element={<Hero />} />
        </Routes>

        {/* <Router>
          <NavBars /> */}
        {/* <Routes> */}
        {/* <Switch>

            <Route path="/" element={<Hero />} />
            </Switch> */}
        {/* <Route
              path="/view"
              element={
                <PlayerList
                  players={this.state.players}
                  updateCurrentPlayer={this.updateCurrentPlayer}
                  deletePlayer={this.deletePlayer}
                  />
              }
            />
            <Route path="/add" element={<PlayerForm />} />
            <Route
              path="/manage"
              element={<PlayerSingle player={this.state.currentPlayer} />}
              />
          </Routes> */}
        {/* </Router> */}
        {/* <div className="row">
          <div className="col">
        
          </div>
          <div className="col">
          <PlayerSingle player={this.state.currentPlayer}/>
          </div>0
          <div className="col">
            <PlayerForm />
          </div>
        </div> */}
      </>
    );
  }
}

export default App;
