import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./loginPage.component.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={onSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="registration__link">If you don't have account: <Link to="/registration">registration</Link> </div> 
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
