const ProfilePage = ({ user }) => {
  return (
    <aside className="user-summary" aria-label="Current user">
      <div className="user-avatar" aria-hidden="true">
        {user.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("")}
      </div>

      <div className="user-identity">
        <span className="summary-label">Current user</span>
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </div>

      <div className="user-access-values">
        <div>
          <span className="summary-label">Role</span>
          <strong>{user.role}</strong>
        </div>
        <div>
          <span className="summary-label">Permissions</span>
          <div className="permission-list">
            {user.permissions.map((permission) => (
              <span className="permission-badge" key={permission}>
                {permission}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfilePage;
