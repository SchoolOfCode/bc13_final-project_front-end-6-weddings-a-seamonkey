import './outcome.css';

export default function NegativeOutcome({
  glutenResult,
  fodmapResult,
  lactoseResult,
  payload,
}) {
  return (
    <div className="outcome">
      <span className="face">☹️</span>
      <p>Don't Eat {payload.product_name}!</p>
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
