import { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import {Suspense, lazy} from 'react'
import './App.scss'
import Header from './components/header/header'
import Profile from './components/user/profile/profile'
const UserList = lazy(() => import('./components/user/list/user-list'))

function App() {
  
  const title = 'Payasi Technologies'


  return (
    <BrowserRouter>
       <div className="main-container">
        <Header title={title} bgColor="bg-blue-500" textColor="text-white">
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/profile/1">About</Link>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<div>Loading users...</div>}>
              <UserList> </UserList>  
            </Suspense>
          } />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>

          
          
       
      </div>
    </BrowserRouter>
  )
}

export default App
