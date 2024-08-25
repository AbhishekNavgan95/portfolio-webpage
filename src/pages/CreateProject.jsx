import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import ProjectForm from '../components/ProjectForm'
import Button from '../components/Button';

const CreateProject = () => {

  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const inputPin = () => {
    setPin(prompt('Enter pin'))
  }

  useEffect(() => {
    inputPin();
  }, [])

  return (
    <div className='flex items-center justify-center min-h-screen my-10'>
      {
        pin === import.meta.env.VITE_PIN ? <ProjectForm /> : (
          <div className='flex flex-col gap-3'>
            <p>Entered Pin is incorrect! try again?</p>
            <div className='flex justify-center gap-3'>
              <Button onClick={inputPin}>Try again</Button>
              <Button onClick={() => navigate('/')}>Home</Button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CreateProject