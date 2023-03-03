import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { register } from '../services/UserService';

export default function RegisterPage() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function userRegister(e) {
    e.preventDefault();
    try {
      await register({ name, email, password });
      setUser({ email });
      setRedirect(true);
    } catch (err) {
      alert('Registration failed');
    }
  }

  if (redirect) {
    return <Navigate to={ '/verifyOTP' } />;
  }

  return (
    <form className="register" onSubmit={ userRegister }>
      <h1>Register</h1>
      <input type="text"
        placeholder="Full Name"
        value={ name }
        onChange={ ev => setName(ev.target.value) } />
      <input type="text"
        placeholder="Email"
        value={ email }
        onChange={ ev => setEmail(ev.target.value) } />
      <input type="password"
        placeholder="Password"
        value={ password }
        onChange={ ev => setPassword(ev.target.value) } />
      <button>Register</button>
    </form>
  );
}