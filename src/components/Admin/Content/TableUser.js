const TableUser = (props) => {
  const { listUser } = props;
  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, index) => (
              <tr key={`table-users-${index}`}>
                <td scope="row">{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-secondary">View</button>
                  <button className="btn btn-warning mx-3">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
