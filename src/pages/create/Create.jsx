import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate);
  }
  return (
    <div className="create-form">
      <h2 className="page-title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Project Name: </span>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="details">
          <span>Project details: </span>
          <textarea
            type="text"
            name="details"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="date">
          <span>Set Due Date: </span>
          <input
            type="date"
            name="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label htmlFor="Category">
          <span>Project Category: </span>
        </label>
        <label htmlFor="Category">
          <span>Assign to: </span>
        </label>
        <button className="btn">Add Project</button>
      </form>
    </div>
  );
};

export default Create;
