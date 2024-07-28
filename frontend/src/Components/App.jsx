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
import { Register } from "./Authentication/Register";
import { UserLogin } from "./Authentication/UserLogin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.fetchPlayer = this.fetchPlayer.bind(this);
  }

  componentDidMount() {
    this.fetchPlayer();
  }

  fetchPlayer() {
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
        this.fetchPlayer();
      })
      .catch((err) => console.log(err));
  }
  addPlayer(player) {
    this.setState((prevState) => ({
      players: [...prevState.players, player],
    }));
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
                <PlayerForm
                  addPlayer={this.addPlayer}
                  fetchPlayer={this.fetchPlayer}
                />
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
          <Route path="/player/:PlayerId" element={<PlayerSingle/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </>
    );
  }
}

export default App;
