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
  submitPlayer(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/players", {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
      })
      .then((Response) => {
        console.log(Response);
        this.setState({ submitted: true });
      })
      .catch((error) => console.log(error));
  }
  render() {
    if (this.state.submitted) {
      return <Navigate to="/view" />;
    }
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6">Add a new Player</h1>
        <form
          className="w-full max-w-lg"
          onSubmit={this.submitPlayer.bind(this)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                ref="firstName"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                ref="lastName"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone">
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                ref="phone"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                ref="email"
                type="text"
              />
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            name="action">
            ADD PLAYER
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
