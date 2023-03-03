import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { login } from '../services/UserService';

export default function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function userLogin(e) {
    e.preventDefault();
    try {
      let _user = await login({ email, password });
      console.log(_user);
      setUser(_user);
      setRedirect(true);
    } catch (err) {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={ '/' } />;
  }

  return (
    <form className="login" onSubmit={ userLogin }>
      <h1>Login</h1>
      <input type="text"
        placeholder="username"
        value={ email }
        onChange={ ev => setEmail(ev.target.value) } />
      <input type="password"
        placeholder="password"
        value={ password }
        onChange={ ev => setPassword(ev.target.value) } />
      <button>Login</button>
    </form>
  );
}