import styled from 'styled-components';

const StyledUserList = styled.div`
  .header {
    margin-bottom: 20px;
  }
`;

function UserList({ users, onDeleteUser }) {
  const handleDelete = (userId) => {
    onDeleteUser(userId)
  } 
  return (
    <StyledUserList>
      <h2 className={'header'}>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.mobile} - Age {user.age} - Gender {user.gender}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </StyledUserList>
  )
}

export default UserList