import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const token = localStorage.token

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate("/");
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <button onClick={handleLogout} disabled={!token}>
      Logout
    </button>
  );
};

export default LogoutButton;