import { NavLink } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Button = ({ linkName, linkPath }) => {
  return (
    <NavLink
      to={linkPath}
      className={({ isActive }) =>
        isActive
          ? 'text-white/90 underline underline-offset-2 text-lg'
          : 'text-white hover:text-white/75 text-lg'
      }
    >
      {linkName}
    </NavLink>
  )
}

export default Button
