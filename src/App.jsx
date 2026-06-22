import { useState } from 'react'
import {Suspense, lazy} from 'react'
import './App.scss'
import Header from './components/header/header'
import AddUser from './components/user/add/add-user'
const UserList = lazy(() => import('./components/user/list/user-list'))

function App() {
  const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState([
    { id: 1, name: 'Asha Patel', email: 'asha.patel@example.com', mobile: '9876543210', age: 29, city: 'Mumbai' },
    { id: 2, name: 'Rohan Singh', email: 'rohan.singh@example.com', mobile: '9123456780', age: 34, city: 'Delhi' },
    { id: 3, name: 'Neha Sharma', email: 'neha.sharma@example.com', mobile: '9988776655', age: 26, city: 'Bengaluru' },
    { id: 4, name: 'Vikram Mehta', email: 'vikram.mehta@example.com', mobile: '9012345678', age: 31, city: 'Chennai' },
    { id: 5, name: 'Priya Raj', email: 'priya.raj@example.com', mobile: '9900112233', age: 24, city: 'Kolkata' },
    { id: 6, name: 'Sanjay Rao', email: 'sanjay.rao@example.com', mobile: '9156782345', age: 38, city: 'Hyderabad' },
    { id: 7, name: 'Anjali Nair', email: 'anjali.nair@example.com', mobile: '9246813579', age: 27, city: 'Pune' },
    { id: 8, name: 'Deepak Joshi', email: 'deepak.joshi@example.com', mobile: '9321456780', age: 33, city: 'Ahmedabad' },
    { id: 9, name: 'Kiran Desai', email: 'kiran.desai@example.com', mobile: '9478523160', age: 30, city: 'Surat' },
    { id: 10, name: 'Meera Kulkarni', email: 'meera.kulkarni@example.com', mobile: '9612345870', age: 25, city: 'Goa' },
  ])
  const title = 'User Management App'

  function counter(type) {
    if (type === 'decrease') {
      setCount((count) => count - 1)
      return
    } else if (type === 'reset') {
      setCount(0)
      return
    } else {
      setCount((count) => count + 1)
      return
    }
  }

  const addUser = (user) => {
    console.log('User added:', user)
    setUsers((prevUsers) => [...prevUsers, { id: prevUsers.length + 1, ...user }])
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  )

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
  }

  return (
    <div className="main-container">
      <Header title={title}>
        <AddUser onAddUser={addUser} />
      </Header>
      <section>
        <h2>User List</h2>
        <input
          style={{width: '98%', padding: '8px', marginBottom: '20px'}}
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Suspense fallback={<div>Loading users...</div>}>
          <p>Total Users: {users.length}</p>
          <UserList users={filteredUsers} onDeleteUser={deleteUser} />
        </Suspense>
        
      </section>
      <section id="spacer"></section>
    </div>
  )
}

export default App
