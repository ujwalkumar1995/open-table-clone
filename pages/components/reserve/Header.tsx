const Header = () => {
  return (
    <div>
        <h3 className='font-bold'>You&apos;re almost done!</h3>
        <div className='mt-5 flex'>
            <img src='https://images.otstatic.com/prod/28353375/2/small.jpg' alt='' className='w-32 h-18 rounder '></img>
            <div className='ml-4'>
                <h1 className='text-3xl font-bold'>
                    Aiana Restaurant Collective
                </h1>
                <div className='flex mt-3'>
                    <p className='mr-6'>Tues, 22, 2023</p>
                    <p className='mr-6'>7:30 PM</p>
                    <p className='mr-6'>3 People</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header