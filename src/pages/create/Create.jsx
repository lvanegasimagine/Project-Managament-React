import "./Create.css";

import { useState, useEffect } from "react";
import Select from "react-select";
import { timestamp } from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
]
const Create = () => {
  const history = useHistory();
  const { addDocument, response } = useFirestore('projects');
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if(documents){
      const options = documents.map(user => (
        { value: user, label: user.displayName }
      ));
      setUsers(options);
    }
  }, [documents])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!category){
      setFormError("Please select a category");
      return;
    }
    if(assignedUsers.length < 1){
      setFormError("Please select at least one user");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    const assignedUsersList = assignedUsers.map((user) => ((
      { displayName: user.value.displayName, photoURL: user.value.photoURL, id: user.value.id }
    )))

    console.log(category);

    const project = {
      name,
      details,
      category: category,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList
    }
    
    await addDocument(project);

    if(!response.error){
        history.push('/');
    }
  }
  return (
    <div className="create-form">
      <h2 className="page-title">Create a New Project</h2>
      <form onSubmit={handleSubmit}>
      {formError && <p className="error">{formError}</p>}
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
          <Select options={categories} onChange={(option) => setCategory(option.value)} required/>
        </label>
        <label htmlFor="Category">
          <span>Assign to: </span>
          <Select options={users} onChange={(option) => setAssignedUsers(option)} isMulti required/>
        </label>
        <button className="btn">Add Project</button>
      </form>
    </div>
  );
};

export default Create;
