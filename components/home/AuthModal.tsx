'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthModalInputs from './AuthModalInputs';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}: {isSignin: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: ''
  })

  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignin ? signinContent : signupContent;
  } 

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <button onClick={handleOpen} className={`${renderContent('bg-blue-400 text-white', '')} border mr-3 p-1 px-4 rounded`}>
        {renderContent('Sign in', 'Sign up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="p-2 h-[500px]">
                <div className="uppercase font-bold pb-2 text-center border-b mb-2">
                    <p className='text-sm'>
                        {renderContent("Sign in", "Create Account")}
                    </p>
                </div>
                <div className='m-auto'>
                    <h2 className='text-2xl font-light text-center'>
                        {renderContent('Log into your account', 'Create your OpenTable Account')}
                    </h2>
                    <AuthModalInputs isSignin={isSignin} handleChangeInput={handleChangeInput} inputs={inputs}/>
                    <button className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm pb-3 disabled:gray-400 '>
                      {renderContent('Sign in', 'Create Account')}
                    </button>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
