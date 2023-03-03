import { useContext, useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getProfile, logout } from '../services/UserService';

export default function Header() {
  const { setUser, user } = useContext(UserContext);

  async function fetchProfile() {
    let _user = await getProfile();
    setUser(_user);
  }

  async function logoutUser() {
    await logout();
    await setUser(null);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <header>
      <Link to="/" className="logo">Tourism Blogs</Link>
      <nav>
        { user && user.email && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={ logoutUser }>Logout ({ user.email })</a>
          </>
        ) }
        { !(user && user.email) && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) }
      </nav>
    </header>
  );
}