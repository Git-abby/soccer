import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player1", PlayerSchema);

export const addNewPlayer = async (req, res) => {
  let newPlayer = new Player(req.body);

  try {
    const player = await newPlayer.save();
    console.log(player)
    res.json("ADDED", player);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    res.json(players);
  } catch (err) {
    res.send(err);
  }
};

export const getPlayerWithId = async (req, res) => {
  try {
    const player = await Player.findById(req.params.PlayerId);
    res.json(player);
  } catch (err) {
    res.send(err);
  }
};

export const updatePlayerWithId = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(
      {
        _id: req.params.PlayerId,
      },
      req.body,
      { new: true }
    );
    res.json(player);
  } catch (err) {
    res.send(err);
  }
};

export const deletePlayerWithId = async (req, res) => {
  try {
    await Player.deleteOne({ _id: req.params.PlayerId });
    res.json({ message: "Player Successfully Deleted!" });
  } catch (err) {
    res.send(err);
  }
};