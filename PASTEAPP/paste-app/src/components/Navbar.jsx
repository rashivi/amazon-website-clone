import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4'>
        <NavbarLink
        to="/"
        >
          Home
        </NavbarLink>

        <NavbarLink
        to="/Pastes"
        >
            Pastes
        </NavbarLink>
    </div>
  )
}

export default Navbar