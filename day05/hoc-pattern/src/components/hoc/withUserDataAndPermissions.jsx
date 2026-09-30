import { useEffect, useState } from "react";

// Simulates fetching user data from an API.
const fetchUser = async () => ({
  id: 1,
  name: "Raj Kiran Chaudhary",
  email: "raj@example.com",
  role: "admin",
  permissions: ["report"],
});

const withUserDataAndPermissions = (WrappedComponent, requiredPermission) => {
  return function WithUserDataAndPermissionsComponent(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchUserData() {
        try {
          const userData = await fetchUser();
          setUser(userData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      fetchUserData();
    }, []);

    if (loading) return <p>Loading user data...</p>;
    if (error) return <p>Error: {error}</p>;

    let hasPermission = true;

    if (requiredPermission === "admin") {
      hasPermission = user.role === "admin";
    }

    if (requiredPermission === "report") {
      hasPermission = user.permissions.includes("report");
    }

    console.log({ hasPermission });

    return (
      <WrappedComponent user={user} hasPermission={hasPermission} {...props} />
    );
  };
};

export default withUserDataAndPermissions;
