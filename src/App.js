import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import CreateNFT from "./components/CreateNFT";
import { RouterProvider } from "react-router-dom";
import router from "./routes/root";
import { AuthProvider } from "./auth/Auth";
import "./components/Footer.js";
// import Drop from "./components/Drop.js";
// import Footer from "./components/Footer.js";

/*----- Components -----*/
// import CreateNFT from "./components/CreateNFT";
import NavBar from "./components/NavBar";
import Trending from "./components/Trending.js";
import Footer from "./components/Footer.js";

/*----- Pages -----*/
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import NFTInfoPage from "./pages/NFTInfoPage";
import SignUp from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";

/*----- Utils -----*/
import PrivateRoute from "./utils/PrivateRoute";

/*----- Context -----*/
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div>
      <NavBar />
      <AuthProvider>
        <Routes>
          {/* Free Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/nftinfo/:id" element={<NFTInfoPage />} />
          <Route path="/userprofile/:username" element={<UserProfilePage />} />

          {/* Auth Routes */}
          <Route exact element={<PrivateRoute />}>
            <Route path="/createnft" element={<CreateNFT />} />
          </Route>
          {/* Auth Routes */}
          <Route
            path="/createnft"
            element={<PrivateRoute component={<CreateNFT />} />}
          />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
