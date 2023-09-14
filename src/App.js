import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import ExerciseDetailsPage from './pages/ExerciseDetailsPage/ExerciseDetailsPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Box sx={{width: {xl: '1440px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/FitnessApp' element={<HomePage />} />
        <Route path='/FitnessApp/exercise/:id' element={<ExerciseDetailsPage />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App