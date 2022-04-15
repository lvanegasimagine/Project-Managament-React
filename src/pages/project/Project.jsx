import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import './Project.css';
import ProjectComment from './ProjectComments/ProjectComment';

const Project = () => {

  const { id } = useParams();
  const {document, error } = useDocument('projects', id);

  if(error){
    return <div className='error'>{error}</div>
  }

  if(!document){
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='project-details'>
      <ProjectSummary project={document}/>
      <ProjectComment/>
    </div>
  )
}

export default Project