import { useState } from "react";
// import {registration} from "../../services/index";
import axios from "axios";


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/users/register', { name, email, password })
      console.log(response);
    } catch (err){
      console.log(err)
    }
  }
  return (
    <form onSubmit={onSubmit}>
    <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
  </form>
  )
}

export default Registration;