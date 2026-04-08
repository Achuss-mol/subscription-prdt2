// My first GitHub push
function Dashboard({ plan }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {plan ? <h2>Active Plan: {plan}</h2> : <p>No active subscription</p>}
    </div>
  );
}

export default Dashboard;