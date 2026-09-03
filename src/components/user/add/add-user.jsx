import { useState } from 'react'
import styles from './add-user.module.css'
import Modal from '../../modal/modal'

function AddUser({ onAddUser }) {
  const [users, setUsers] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('User added:', users) 
    onAddUser(users) 
    clearForm()
    setIsModalOpen(false)
    // Handle form submission logic here
  } 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsers((users) => ({ ...users, [name]: value }));
  };

  function clearForm() {
    setUsers({})
  }

  return (
    <div>
      <button type="button" className="primary" onClick={() => setIsModalOpen(true)}>
        Add User
      </button>
    <Modal title="Add User" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 p-5">
            <label htmlFor="name">Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={users.name}
                  onChange={handleChange}
                />
            </label>
            
            <label htmlFor="email">Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={users.email}
                  onChange={handleChange}
                />
            </label>
            
            <label htmlFor="mobile">Mobile:
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={users.mobile}
                  onChange={handleChange}
                />
            </label>
          
            <label htmlFor="age">Age:
                <input type="number" name="age" placeholder="Age" value={users.age} onChange={handleChange} />
            </label>
            
            <label htmlFor="city">City:
                <input type="text" name="city" placeholder="City" value={users.city} onChange={handleChange} />
            </label>

            <label htmlFor="gender">Gender:
                <select  name="gender" value={users.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
          </div>

          <div className={`${styles.actionButtons} gap-2`}>
            <button className="secondary" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button className="primary" type="submit">
              Add User
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddUser