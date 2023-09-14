import React from 'react'
import {Stack, Typography} from '@mui/material'
import Gym from '../../assets/icons/gym.png'

function BodyPart({elem, setBodyPart, bodyPart}) {
  return (
    <Stack type='button'
           alignItems='center'
           justifyContent='center'
           className='bodyPart-card'
           sx={{
            borderTop: bodyPart === elem ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px', 
            width: '270px', 
            height: '282px', 
            cursor: 'pointer', 
            gap: '47px'
           }}
           onClick={() => {
            setBodyPart(elem)
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
           }}
    >
        <img src={Gym} alt='gym_logo' style={{width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{elem}</Typography>
    </Stack>
  )
}

export default BodyPart