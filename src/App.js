import './App.css';
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Layout from "./Layout";
import ListBlogs from "./pages/ListBlogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import CreateBlog from "./pages/CreateBlog";
import BlogDisplay from "./pages/BlogDisplay";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <ListBlogs /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/verifyOTP" element={ <VerifyOTP /> } />
          <Route path="/create" element={ <CreateBlog /> } />
          <Route path="/post/:id" element={ <BlogDisplay /> } />
          <Route path="/edit/:id" element={ <EditBlog /> } />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
