const AdminPanel = ({ user }) => {
  const isAdmin = user.role === "admin";

  return (
    <article
      className={`result-card result-card--${isAdmin ? "success" : "denied"}`}
    >
      <div className="result-card__topline">
        <span className="value-badge">Current role: {user.role}</span>
        <span
          className={`status-badge status-badge--${isAdmin ? "success" : "denied"}`}
        >
          <span className="status-icon" aria-hidden="true">
            {isAdmin ? "✓" : "×"}
          </span>
          {isAdmin ? "Access granted" : "Access denied"}
        </span>
      </div>

      <h3>{isAdmin ? "Admin panel available" : "Admin panel unavailable"}</h3>
      <p>
        {isAdmin
          ? "The current role matches the required admin role."
          : `The ${user.role} role does not match the required admin role.`}
      </p>

      <dl className="value-comparison">
        <div>
          <dt>Required role</dt>
          <dd>admin</dd>
        </div>
        <div>
          <dt>Current role</dt>
          <dd>{user.role}</dd>
        </div>
      </dl>
    </article>
  );
};

export default AdminPanel;
