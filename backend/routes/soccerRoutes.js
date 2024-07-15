import {
  addNewPlayer,
  deletePlayerWithId,
  getAllPlayers,
  getPlayerWithId,
  updatePlayerWithId,
} from "../controllers/playerControllers";
import { loginUser, registerUser } from "../controllers/userController";

const routes = (app) => {
  app.route("/players").get(getAllPlayers).post(addNewPlayer);

  //Player Crud
  app
    .route("/player/:PlayerId")
    .get(getPlayerWithId)
    .put(updatePlayerWithId)
    .delete(deletePlayerWithId);

    //Login & Registration
    app.route("/login").post(loginUser);
    app.route("/register").post(registerUser);
};

export default routes;
