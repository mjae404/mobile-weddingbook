import React from "react";
import "./styles/style.scss";

import MainVisual from "./components/MainVisual";
import Couple from "./components/Couple";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import GiveLove from "./components/GiveLove";
import GuestBook from "./components/GuestBook";
import { FirebaseContextProvider } from "./hooks/useFirebase";

function App() {
  return (
      <FirebaseContextProvider>
          <MainVisual/>
            <main className="main">
              <Couple/>
              <Gallery/>
              <Location/>
              <GiveLove/>
              <GuestBook/>
          </main>
      </FirebaseContextProvider>
  );
}

export default App;
