import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { verifyEmail } from '../services/UserService';

export default function VerifyOTP() {
    const { setUser, user } = useContext(UserContext);
    let email = user.email;
    const [code, setCode] = useState('');
    const [redirect, setRedirect] = useState(false);


    async function userLogin(e) {
        e.preventDefault();
        try {
            let _user = await verifyEmail({ email, code });
            console.log(_user);
            setUser(_user);
            setRedirect(true);
        } catch (err) {
            alert('Incorrect OTP');
        }
    }

    if (redirect) {
        return <Navigate to={ '/' } />;
    }

    return (
        <form className="login" onSubmit={ userLogin }>
            <h1>Email Verification Code</h1>
            <input type="text"
                placeholder="code"
                value={ code }
                onChange={ ev => setCode(ev.target.value) } />
            <button>Login</button>
        </form>
    );
}