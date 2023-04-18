import {  Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
  let token = localStorage.getItem('token')
  console.log(token)
  // let auth = {'token': false}
  // console.log(auth.token)
  return token ? 
  
  <Outlet/>
   : 
  <Navigate to="/login" replace />
  // isAuthenticated ? 
  // (
  // <Route {...rest} element={element}/>) 
 
  ;
}

export default PrivateRoute;