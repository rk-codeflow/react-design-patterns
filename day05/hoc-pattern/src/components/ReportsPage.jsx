const ReportsPage = ({ hasPermission }) => {
  if (!hasPermission) {
    return <h3>Access Denied</h3>;
  }

  return (
    <div>
      <h2>Reports</h2>
      <p>Here are the available reports.</p>
    </div>
  );
};

export default ReportsPage;
