import React  from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header";

function App(){
    return(
        <div>
<Header/>
        </div>
    );
};
//
ReactDom.createRoot(document.getElementById("root")).render(<App/>)