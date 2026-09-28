import AdminPanel from "./components/AdminPanel";
import ProfilePage from "./components/ProfilePage";
import ReportsPage from "./components/ReportsPage";
import withUserDataAndPermissions from "./components/hoc/withUserDataAndPermissions";

const ProfilePageWithUser = withUserDataAndPermissions(ProfilePage);
const AdminPanelWithUser = withUserDataAndPermissions(AdminPanel);
const ReportsPageWithPermissions = withUserDataAndPermissions(
  ReportsPage,
  "report",
);

function App() {
  return (
    <div>
      <ProfilePageWithUser />
      <AdminPanelWithUser />
      <ReportsPageWithPermissions />
    </div>
  );
}

export default App;
