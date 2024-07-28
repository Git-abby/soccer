import React from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.submitPlayer = this.submitPlayer.bind(this);
  }
  async submitPlayer(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/players", {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
        // isCoach: this.refs.isCoach.value,
        team: this.refs.team.value,
        speed: this.refs.speed.value,
        strength: this.refs.strength.value,
        endurance: this.refs.endurance.value,
        tactical: this.refs.tactical.value,
      });
      console.log(response);
      if (this.props.addPlayer) {
        this.props.addPlayer(response.data);
        this.props.fetchPlayer();
        this.setState({ submitted: true });
      }
    } catch (err) {
      console.error("Error adding player:", err);
      // setError(error.message);
    }
  }

  render() {
    if (this.state.submitted) {
      return <Navigate to="/view" />;
    }
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center bg-gradient-to-r  min-h-screen p-6">
          <h1 className="text-4xl font-bold text-white mb-8">
            Add a new Player
          </h1>
          <form
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
            onSubmit={this.submitPlayer.bind(this)}>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="firstName"
                  ref="firstName"
                  type="text"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="lastName"
                  ref="lastName"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="phone">
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="phone"
                  ref="phone"
                  type="text"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="email"
                  ref="email"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="isCoach">
                  Are you a Coach?
                </label>
                <div className="flex-col items-center">
                  <div className="flex- items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="true"
                      name="isCoach"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="isCoach"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      True
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="isCoach"
                      type="radio"
                      value="false"
                      name="isCoach"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="isCoach"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      False
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="team">
                  Team
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="team"
                  ref="team"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="speed">
                  Speed
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="speed"
                  ref="speed"
                  type="text"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="strength">
                  Strength
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="strength"
                  ref="strength"
                  type="text"
                  required
                />
              </div>
            
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="tactical">
                  Tactical
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="tactical"
                  ref="tactical"
                  type="text"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  htmlFor="endurance">
                  Endurance
                </label>
                <input
                  className="appearance-none block w-full bg-blue-100 text-blue-700 border border-blue-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="endurance"
                  ref="endurance"
                  type="text"
                  required
                />
              </div>
            
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              ADD PLAYER
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PlayerForm;
