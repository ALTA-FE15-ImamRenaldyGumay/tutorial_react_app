import { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import Button from "../../components/Button";

interface ReqresState {
  name: string;
  job: string;
}

class Reqres extends Component<ReqresState> {
  state = {
    name: "",
    job: "",
  };

  postJob() {
    const { name, job } = this.state;
    const body: ReqresState = {
      name: name,
      job: job,
    };
    axios
      .post("https://reqres.in/api/users", body)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Welcome ${response?.data?.name}, your job is ${response?.data?.job}`,
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Something went wrong : ${error}`,
          confirmButtonText: "OK",
        });
      });
  }

  handleLogout() {
    Cookies.remove("username");
    Cookies.remove("password");
    Swal.fire({
      icon: "success",
      title: "success",
      text: "Logout successfully!",
      confirmButtonText: "OK",
    });
  }

  render() {
    const { name, job } = this.state;
    const username = Cookies.get("username");
    const password = Cookies.get("password");
    const pin = sessionStorage.getItem("pin");

    return (
      <section className="flex justify-content-center">
        <div>
          <p>Your pin : {pin ? pin : "Your session is expired"}</p>
          <p>
            Your username : {username ? username : "You have not logged in"}
          </p>
          <p>
            Your password : {password ? password : "You have not logged in"}
          </p>
          <Button
            id="logout"
            label="Logout"
            onClick={() => this.handleLogout()}
          />
        </div>
        {/* <div className="grid grid-cols-1 gap-y-5 mx-10">
          <p>Your Name</p>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            value={name}
            className="p-3 w-60 h-10 bg-white rounded-md shadow-md focus:border focus:border-alta-blue-dark"
            type="text"
          />
          <p>Your Job</p>
          <input
            onChange={(e) => this.setState({ job: e.target.value })}
            value={job}
            className="p-3 w-60 h-10 bg-white rounded-md shadow-md focus:border focus:border-alta-blue-dark"
            type="text"
          />
          <button
            onClick={() => this.postJob()}
            className="bg-alta-orange text-white focus:outline-none hover:border-none"
          >
            Submit
          </button>
        </div> */}
      </section>
    );
  }
}

export default Reqres;
