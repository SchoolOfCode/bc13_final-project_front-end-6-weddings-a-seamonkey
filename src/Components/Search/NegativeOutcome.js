
import './outcome.css';

export default function NegativeOutcome({glutenResult,fodmapResult,lactoseResult}) {
  return (


    <div className="outcome">
      <span className="face">☹️</span>
      <p>Dont Eat this!</p>
      <>Product contains:</> 
      <br></br>
      <>{glutenResult}</>
      <br></br>
      <>{fodmapResult}</>
      <br></br>
      <>{lactoseResult}</>
    </div>
  );
}
