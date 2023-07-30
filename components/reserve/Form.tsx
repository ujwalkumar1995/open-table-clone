const Form = () => {
  return (
    <div className='mt-10 flex flex-wrap justify-between w-[660px]'>
        <input className='border rounded p-3 w-80 mb-4' placeholder='First Name'></input>
        <input className='border rounded p-3 w-80 mb-4' placeholder='Last Name'></input>
        <input className='border rounded p-3 w-80 mb-4' placeholder='Phone Number'></input>
        <input className='border rounded p-3 w-80 mb-4' placeholder='Email'></input>
        <input className='border rounded p-3 w-80 mb-4' placeholder='Occasion (optional)'></input>
        <input className='border rounded p-3 w-80 mb-4' placeholder='Requests (optional)'></input>
        <button className='bg-red-600 w-full p-3 text-white font-bold rounder disabed:bg-gray-300'>
        Complete Reservation
        </button>
        <p className='text-sm'>By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data rates may apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.</p>
    </div>
  )
}

export default Form;