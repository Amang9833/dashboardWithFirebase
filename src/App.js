import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser)


  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
              <RequiredAuth>
              <Home />
              </RequiredAuth>
            } />
            <Route path="users">
              <Route index element={
                <RequiredAuth >
                  <List />
                </RequiredAuth>
              }
              />
              <Route path=":userId" element={
                <RequiredAuth >
                <Single />
                </RequiredAuth>
              } />
              <Route
                path="new"
                element={
                <RequiredAuth >
                  <New inputs={userInputs} title="Add New User" />
                </RequiredAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route index element={
                <RequiredAuth >
                <List />
                </RequiredAuth>
              } />
              <Route path=":productId" element={
                <RequiredAuth >
                <Single />
                </RequiredAuth>
              } />
              <Route
                path="new"
                element={
                <RequiredAuth >
                  <New inputs={productInputs} title="Add New Product" />
                </RequiredAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
