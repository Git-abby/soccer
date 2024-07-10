import {
  addNewPlayer,
  deletePlayerWithId,
  getAllPlayers,
  getPlayerWithId,
  updatePlayerWithId,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getAllPlayers).post(addNewPlayer);

  app
    .route("/player/:PlayerId")
    .get(getPlayerWithId)
    .put(updatePlayerWithId)
    .delete(deletePlayerWithId);
};

export default routes;
