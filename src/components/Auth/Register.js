import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiService";
import "./Register.css";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // submit register
    let data = await postRegister(email, password, username);
    if (data && data.EC === 0) {
        toast.success(data.EM);
        navigate("/login");
      }
      if (data && data.EC !== 0) {
        toast.error(data.EM);
      }
  }
  return (
    <div className="login-container">
      <div className="header">
        <span>Already have an account?</span>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
      <div className="title col-4 mx-auto">HuyIT</div>
      <div className="welcome col-4 mx-auto">Start your journey?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email(*)</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password(*)</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button className="btn-submit" onClick={() => handleRegister()}>Create my free account</button>
        </div>
        <div className="text-center">
          <span className="back" onClick={() => navigate("/")}>
            &#60;&#60; Go to HomePage
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
