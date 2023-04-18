import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout/layout.component';
import CreatePage from './components/createPage/createPage.component';
import GetPosts from './components/Posts/getPosts/getPosts.component';
import EditPage from './components/editPage/editPage.component';
import PrivateRoute from './components/privateRoute/privateRoute.component';
import Login from './components/loginPage/loginPage.component';
import Registration from './components/registrationPage/registrationPage.component';



function App({isAuthenticated}) {
  const token = localStorage.token
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GetPosts/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path='/create' element={<CreatePage/>} />
              <Route path='/:id' element={<EditPage/>} />
            </Route>
            <Route path="/login" element={!token ? <Login/> : <div>You are already loged in</div>}/>
            <Route path="/registration" element={<Registration/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
