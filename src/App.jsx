import React from "react";
import { Navigation } from "./LandingPage/navBar/NavBar.jsx";
import Dashboard from "./AdminPage/Dashboard/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/authContext.js";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Home } from "./LandingPage/Home/Home.jsx";
import Footer from "./LandingPage/Footer/Footer";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage.jsx";
import { UserView } from "./UserPage/userView/UserView.jsx";
import { Login } from "./LandingPage/LoginMail/Login.jsx";
import ProtectedRouteUser from "./ProtectedRoute/ProtectedRouteUser.jsx";
import { Register } from "./AdminPage/Register/Register";
import Graph from "./AdminPage/Graph/Graph.jsx";
import Calendar from "./AdminPage/Calendar/Calendar.jsx";
import Users from "./AdminPage/Users/Users";
import Profile from "./UserPage/userView/Profile.jsx";
import { UserPayments } from "./UserPage/userView/UserPayments.jsx";
import { ReadPost } from "./Community/Posts/ReadPost";
import { UserDash } from "./UserPage/userView/UserDash.jsx";
import { UserRules } from "./UserPage/userView/UserRules.jsx";
import InfoGeneral from "./LandingPage/navBar/InfoGeneral.jsx";
import Precios from "./LandingPage/navBar/Precios";
import Health from "./LandingPage/navBar/Health.jsx";
import Biopic from "./LandingPage/navBar/Biopic.jsx";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <div className="navBar">
          <Navigation />

          <div className="middle-component">
            <Routes>
              <Route
                path="/"
                element={
                  <Navigate to="/crossftajusco.github.io/crossftAjusco" />
                }
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco"
                element={<Home />}
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco/home"
                element={<Home />}
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco/login"
                element={<Login />}
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco/acerca_de"
                element={<InfoGeneral />}
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco/coach"
                element={<Biopic />}
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco/precios"
                element={<Precios />}
              />
              <Route
                path="/crossftajusco.github.io/crossftAjusco/recomendaciones_de_salud"
                element={<Health />}
              />

              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Dashboard />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Calendar />} />
                <Route path="graph" element={<Graph />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="form" element={<Register />} />
                <Route path="usuarios" element={<Users />} />
                <Route path="comunidad" element={<ReadPost />} />
              </Route>

              <Route
                path="/UserView/*"
                element={
                  <ProtectedRouteUser>
                    {" "}
                    <UserView />
                  </ProtectedRouteUser>
                }
              >
                <Route index element={<UserDash />} />
                <Route path="profile" element={<Profile />} />
                <Route path="pagos" element={<UserPayments />} />
                <Route path="comunidad" element={<ReadPost />} />
                <Route path="eventos" element={<UserDash />} />
                <Route path="reglamento" element={<UserRules />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
};
export default App;
