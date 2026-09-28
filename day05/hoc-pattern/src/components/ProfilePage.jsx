const ProfilePage = ({ user }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>{user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
