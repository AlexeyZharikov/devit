import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/users/register', { name, email, password })
      console.log(response);
      navigate('/')
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