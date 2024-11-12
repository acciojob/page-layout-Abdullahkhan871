
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  const data = {
    Header: "Welcome to my website",
    child: "This is the content of my website.",
    footer: "2023 My Website. All rights reserved."
  }
  return (
    <div>
        <PageLayout {...data}/>
    </div>
  )
}

export default App
