import React, { useState } from "react";

const NovellLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    server: "",
    role: "",
    signOn: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        signOn: checked
          ? [...prev.signOn, value]
          : prev.signOn.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      city: "",
      server: "",
      role: "",
      signOn: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Novell Services Login</h2>

      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>          City of Employment:</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />

      <label>Web server:</label>
      <select name="server" value={formData.server} onChange={handleChange}>
        <option value="">-- Choose a server --</option>
        <option value="Server1">Server1</option>
        <option value="Server2">Server2</option>
        <option value="Server3">Server3</option>
      </select>

      <fieldset>
        <legend>Please specify your role:</legend>
        {["Admin", "Engineer", "Manager", "Guest"].map((role) => (
          <label key={role}>
            <input
              type="radio"
              name="role"
              value={role}
              checked={formData.role === role}
              onChange={handleChange}
            />{" "}
            {role}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Single Sign-on to the following:</legend>
        {["Mail", "Payroll", "Self-service"].map((service) => (
          <label key={service}>
            <input
              type="checkbox"
              name="signOn"
              value={service}
              checked={formData.signOn.includes(service)}
              onChange={handleChange}
            />{" "}
            {service}
          </label>
        ))}
      </fieldset>

      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default NovellLogin;
