import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const token = localStorage.token

  const handleLogin = async () => {
    try {
      navigate('/login');
    } catch (error) {
      console.error(error);
    } 
  }
  return (
    <button onClick={handleLogin} disabled={token}>
      Login
    </button>
  )
}
export default LoginButton;