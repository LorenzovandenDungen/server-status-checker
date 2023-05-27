import React from "react";
import ServerList from "./components/ServerList";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Update the path to your static files */}
      <img src={process.env.PUBLIC_URL + "/static/image.png"} alt="Logo" />
      <ServerList />
    </div>
  );
}

export default App;
