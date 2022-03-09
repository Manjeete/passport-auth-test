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
        <p onClick={googleFunc}>
          <button>google auth</button>
        </p>
        
      </header>
    </div>
  );
}

export default App;
