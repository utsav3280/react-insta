import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [user, setUser] = useState({ name: "", age: "", company: "" });
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://insta-backend-erbc.onrender.com/users").then((res) => { return res.json() }).then((res) => setdata(res));
  }, [data])

  const register = async () => {
    console.log(user);
    axios.post("https://insta-backend-erbc.onrender.com/register", user).then((res) => { }).catch((e) => console.log(e));
    console.log("success");
    alert("registration successful");
  }

  return (
    <div>
      <div>
        <input placeholder="name" onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
        <input placeholder="age" onChange={(e) => { setUser({ ...user, age: e.target.value }) }} />
        <input placeholder="company" onChange={(e) => { setUser({ ...user, company: e.target.value }) }} />
        <input type="button" onClick={register} value="register" />
      </div>

      {
        data.map((ele, idx) => {
          return (
            <h1 key={idx}>{ele.name}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
