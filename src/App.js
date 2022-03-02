import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const endpont =
    "http://127.0.0.1:8080/api/v1/user/auth/google";

  const googleFunc = () => {
    axios({
      url: endpont,
      method: "GET",
    })
      .then((res) => {
        window.open(res.request.responseURL, '_blank');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={googleFunc}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
