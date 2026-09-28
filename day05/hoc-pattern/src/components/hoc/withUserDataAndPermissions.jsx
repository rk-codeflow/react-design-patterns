// Simulates fetching the logged-in user from an API.
const fetchUser = () => ({
  id: 1,
  name: "Raj Kiran Chaudhary",
  email: "raj@example.com",
  role: "admin",
  permissions: ["report"],
});

const withUserDataAndPermissions = (WrappedComponent, requiredPermission) => {
  const WithUserDataAndPermissions = (props) => {
    const user = fetchUser();
    const hasPermission =
      !requiredPermission ||
      user.permissions.includes(requiredPermission);

    return (
      <WrappedComponent
        {...props}
        user={user}
        hasPermission={hasPermission}
      />
    );
  };

  WithUserDataAndPermissions.displayName = `withUserDataAndPermissions(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithUserDataAndPermissions;
};

export default withUserDataAndPermissions;
