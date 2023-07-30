const Header = () => {
    return (
        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
            <div className='text-left text-lg py-3 m-auto flex justify-center'>
              <input className='rounded bg-white mr-3 p-2 w-[450px]' placeholder='State, city or town' type='text'></input>
              <button className='bg-red-600 px-9 py-2 text-white rounded'>Let&apos;s go</button>
            </div>
        </div>
    )
}

export default Header;