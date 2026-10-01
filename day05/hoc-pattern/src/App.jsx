import AdminPanel from "./components/AdminPanel";
import ProfilePage from "./components/ProfilePage";
import ReportsPage from "./components/ReportsPage";
import withUserDataAndPermissions from "./components/hoc/withUserDataAndPermissions";
import "./App.css";

const ProfilePageWithUser = withUserDataAndPermissions(ProfilePage);
const AdminPanelWithUser = withUserDataAndPermissions(AdminPanel);
const ReportsPageWithPermissions = withUserDataAndPermissions(
  ReportsPage,
  "report",
);

function App() {
  return (
    <main className="access-page">
      <header className="page-header">
        <p className="eyebrow">Higher-order component</p>
        <h1>Role and permission UI</h1>
        <p className="page-description">
          The interface below changes automatically based on the current user’s
          role and permissions.
        </p>
        <ProfilePageWithUser />
      </header>

      <div className="access-sections">
        <section className="access-section" aria-labelledby="role-title">
          <div className="section-heading">
            <span className="section-number" aria-hidden="true">
              01
            </span>
            <div>
              <p className="eyebrow">Role check</p>
              <h2 id="role-title">UI based on role</h2>
              <p>Checks whether the current user has the admin role.</p>
            </div>
          </div>
          <AdminPanelWithUser />
        </section>

        <section className="access-section" aria-labelledby="permission-title">
          <div className="section-heading">
            <span className="section-number" aria-hidden="true">
              02
            </span>
            <div>
              <p className="eyebrow">Permission check</p>
              <h2 id="permission-title">UI based on permission</h2>
              <p>Checks whether the current user has the report permission.</p>
            </div>
          </div>
          <ReportsPageWithPermissions />
        </section>
      </div>
    </main>
  );
}

export default App;
