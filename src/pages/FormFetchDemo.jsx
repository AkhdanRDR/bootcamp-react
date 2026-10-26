import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/store";

export default function FormFetchDemo() {
  // Integrasi Redux
  const reduxCounter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // Materi 11: Form Handling & Validation
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    let errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username wajib diisi.";
    }
    if (!formData.email.includes("@")) {
      errors.email = "Email tidak valid.";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSubmittedData(formData);
      setFormErrors({});
      setFormData({ username: "", email: "" });
    } else {
      setFormErrors(errors);
    }
  };

  // Materi 10: API Fetching
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Materi 9, 10 & 11: Redux, Form, and Fetching</h2>

      {/* Redux State */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h4>Redux Global State</h4>
        <p>Global Redux Counter: {reduxCounter}</p>
        <button onClick={() => dispatch(decrement())}>- Redux</button>{" "}
        <button onClick={() => dispatch(increment())}>+ Redux</button>
      </div>

      {/* Form Handling & Validation */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h4>Form Handling & Validation</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {formErrors.username && <span style={{ color: "red" }}> {formErrors.username}</span>}
          </div>
          <div style={{ marginTop: "8px" }}>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span style={{ color: "red" }}> {formErrors.email}</span>}
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>Submit Form</button>
        </form>

        {submittedData && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Tersimpan: {submittedData.username} ({submittedData.email})
          </p>
        )}
      </div>

      {/* API Fetching */}
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
        <h4>API Fetching (jsonplaceholder)</h4>
        {isLoading ? (
          <p>Sedang memuat data API...</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}