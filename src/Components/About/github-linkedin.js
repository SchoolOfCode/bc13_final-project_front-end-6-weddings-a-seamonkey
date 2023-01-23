import github from '../../Images/github-logo.png';
import linkedin from '../../Images/linkedin-logo.png';
import './github-linkedin.css';

export default function Contacts({
  githubAddress,
  linkedinAddress,
  bootcamper,
}) {
  return (
    <div className="links-container">
      <p>Contact {bootcamper} here: </p>
      <a href={githubAddress} target="_blank" rel="noreferrer">
        <div className="img-container">
          <img className="links-logo" src={github} alt="Github logo" />
        </div>
      </a>
      <a href={linkedinAddress} target="_blank" rel="noreferrer">
        <div className="img-container">
          <img className="links-logo" src={linkedin} alt="Linkedin logo" />
        </div>
      </a>
    </div>
  );
}
