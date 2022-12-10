import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostItem from "./pages/PostItem";
import AddPost from "./pages/AddPost";
import './App.css';
import { Login } from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add_post">Add Post</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:postId" element={<PostItem />} />
          <Route path="/add_post" element={<AddPost/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;