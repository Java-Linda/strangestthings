import {Routes, Route, Link} from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Home from "./components/Home";
import LogOut from "./components/LogOut";
import SinglePost from "./components/SinglePost"
import "./App.css";

export default function App() {
// I made all my routes and links on the same page, I orginally had them seperated to different components but why complicate things
	return (
		<>
        <header>
            <Link to="/Home"> HOME </Link>
            <Link to="/AllPosts"> POSTS </Link>
            <Link to="/LogOut"> LOG OUT </Link>
        </header>

        <div>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/AllPosts" element={<AllPosts />} />
                <Route path="/LogOut" element={<LogOut />} />
                <Route path="/SinglePost" element={<SinglePost />} />
            </Routes>
        </div>
		</>
	);
};
