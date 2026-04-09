import PlanCard from "../components/PlanCard";
// My first GitHub push
function Pricing({ onSubscribe }) {
  return (
    <div>
      <h1>Choose Plan</h1>
      <PlanCard name="Basic" price="199" onSelect={() => onSubscribe("Basic")} />
      <PlanCard name="Premium" price="499" onSelect={() => onSubscribe("Premium")} />
    </div>
  );
}

export default Pricing;