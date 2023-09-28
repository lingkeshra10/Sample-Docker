import React, { useState } from "react";

function AuthPage(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      username: username,
      password: password,
    };

    fetch("http://auth.service.com/auth/userLoginAuth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return(
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Login Page</h3>
        <div className="form-group mt-3">
          <div className="mt-1 mb-2">
            <label>Username</label>
          </div>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter your username"
            onChange={(event) => setUsername(event.target.value)}
          />

          <div className="mt-1 mb-2">
            <label>Password</label>
          </div>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
            disabled={loading}
          >
          {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      {error && <p className="text-danger">Error: {error.message}</p>}
      {responseData && (
        <div>
          <h4>API Response:</h4>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
        
      </div>
    );
}

export default AuthPage;