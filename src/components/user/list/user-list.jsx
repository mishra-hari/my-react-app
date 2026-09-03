import styled from 'styled-components';
import Header  from '../../header/header'; 
import styles from './user-list.module.css';
import { apiService } from '../../../services/api.service';
import { useEffect, useState } from 'react';
import  useLocalStorage  from '../../../services/useLocalStorage';
import AddUser from '../add/add-user';

const StyledUserList = styled.div`
  padding: 2rem;
`;

function UserList({ onDeleteUser, onSearch, children }) {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useLocalStorage()

  const handleDelete = (userId) => {
    //onDeleteUser(userId)
    apiService.delete(`https://dummyjson.com/users/${userId}`).then((res)=>{
      console.log(res);
    })
  } 

  useEffect(() => {
    apiService.get('https://dummyjson.com/users').then((res) => {
      setUsers(res.users)
      console.log(res.users)
    })
  }, [])

  const addUser = (event) =>{
       console.log(event);
  }

  return (
    <StyledUserList>
      <Header title="User List">  
        <input
          className={styles.searchInput}
          style={{padding: '8px'}}
          type="text"
          placeholder="Search users by name..."
          onChange={(event) => onSearch(event.target.value)}
        />
        <AddUser onAddUser={addUser} />
      </Header>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Phone</th>
              <th className="border px-3 py-2">Age</th>
              <th className="border px-3 py-2">Gender</th>
              <th className="border px-3 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="even:bg-gray-50">
                <td className="border px-3 py-2">{`${user.firstName} ${user.lastName}`}</td>
                <td className="border px-3 py-2">{user.email}</td>
                <td className="border px-3 py-2">{user.phone}</td>
                <td className="border px-3 py-2">{user.age}</td>
                <td className="border px-3 py-2">{user.gender}</td>
                <td className="border px-3 py-2 space-x-2">
                  <button className="primary" onClick={() => handleDelete(user.id)}>Delete</button>
                  <button className="primary" onClick={() => setUser(user)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {children}
    </StyledUserList>
  )

}

export default UserList