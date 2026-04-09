// My first GitHub push
function PlanCard({ name, price, onSelect }) {
  return (
    <div style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
      <h2>{name}</h2>
      <p>₹{price}</p>
      <button onClick={onSelect}>Subscribe</button>
    </div>
  );
}

export default PlanCard;