import { useState } from "react"
import { timestamp } from "../../../firebase/config"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useFirestore } from "../../../hooks/useFirestore"
import './ProjectComment.css'

export default function ProjectComment({project}) {
  const { updatedDocument, response } = useFirestore('projects');
  const [newComment, setNewComment] = useState('');
  const { user } = useAuthContext();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }

    await updatedDocument(project.id, {
      comments: [...project.comments, commentToAdd]
    });

    if(!response.error){
      setNewComment('');
    }

    console.log(commentToAdd);
  }
  return (
    <div className="project-comments">
      <h4>Project Comments</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label htmlFor="comment">
          <span>Add New Comment:</span>
          <textarea name="comment" required onChange={e => setNewComment(e.target.value)} value={newComment}></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  )
}
