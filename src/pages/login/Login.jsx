import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, isPending, error} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);

  };
  return (
    <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
      <h2>Login</h2>
      <label htmlFor="email">
        <span>Email:</span>
        <input
          id="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor="password">
        <span>Password:</span>
        <input
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
