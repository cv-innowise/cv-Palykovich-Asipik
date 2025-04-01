import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../services/queries";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        variables: {
          email,
          password,
        },
      });
      console.log("Registration successful:", response.data.signup);
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>Registration Successful!</h3>
          <p>User ID: {data.signup.user.id}</p>
          <p>Email: {data.signup.user.email}</p>
          <p>Verified: {data.signup.user.is_verified ? "Yes" : "No"}</p>
          <p>Access Token: {data.signup.access_token}</p>
          <p>Refresh Token: {data.signup.refresh_token}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
