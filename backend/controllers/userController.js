import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";
import { UserSchema } from "../models/userModel";

// const Player = mongoose.model("Player1", PlayerSchema);
const User = mongoose.model("Users", UserSchema);

export const addNewPlayer = async (req, res) => {
  let newPlayer = new Player(req.body);

  try {
    const player = await newPlayer.save();
    res.json(player);
  } catch (err) {
    res.send(err);
  }
};



// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({
//       email: email,
//     });
//     if (user) {
//         if (user.password === password) {
//             console.log("User Found", user);
//             res.json({ message: "Success", user: user});
//         } else {
//             console.log("Password is incorrect!");
//             res.json({ message: "Password incorrect" });
//         }
//     }
//     if (!user) {
//       console.log("No user Exist");
//       res.send({ message: "No user exist" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

export const registerUser = async (req, res) => {
  let newUser = new User(req.body);

  try {
    const user = await newUser.save();
    res.send({ user: user, message: "Registration Success" });
    res.json(user);
  } catch (err) {
    res.send(err);
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        console.log("User Found", user);
        return res.json({ message: "Success", user, success: true });
      } else {
        console.log("Password is incorrect!");
        return res.json({ message: "Password incorrect", success: false});
      }
    } else {
      console.log("No user Exist");
      return res.json({ message: "No user exist" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
