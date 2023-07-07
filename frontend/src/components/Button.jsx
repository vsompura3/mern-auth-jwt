import { NavLink } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Button = ({ linkName, linkPath, variant }) => {
  return (
    <NavLink
      to={linkPath}
      className={({ isActive }) =>
        isActive
          ? `text-white/90 underline underline-offset-2 text-lg `
          : `text-white hover:text-white/75 text-lg ${
              variant === 'danger' && 'bg-red-600 px-4 py-2 rounded'
            }`
      }
    >
      {linkName}
    </NavLink>
  )
}

export default Button
