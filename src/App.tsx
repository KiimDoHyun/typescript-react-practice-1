import "./App.css";
import Router from "./Router/Router";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to={"/"}>Home</Link>
                <Link to={"/page1"}>Page1</Link>
                <Link to={"/page2"}>Page2</Link>
                <Link to={"/Practice1"}>Practice1</Link>
                <Link to={"/Practice2"}>Practice2</Link>
                <Link to={"/Practice3"}>Practice3</Link>
                <Link to={"/Practice4"}>Practice4</Link>
            </header>
            <Router />
        </div>
    );
}

export default App;
