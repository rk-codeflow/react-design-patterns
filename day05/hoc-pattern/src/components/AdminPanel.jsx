const AdminPanel = ({ user }) => {
  if (user.role !== "admin") {
    return <h3>Access Denied</h3>;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome to the admin area.</p>
    </div>
  );
};

export default AdminPanel;
