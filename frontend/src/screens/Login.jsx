/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <h2 className="text-3xl font-bold">LogIn</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 mt-8">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-lg text-slate-800">
            Enter email:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md text-lg border-2 border-slate-300"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password" className="text-lg text-slate-800">
            Enter password:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md text-lg border-2 border-slate-300"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white rounded py-2 text-lg hover:bg-slate-800/75"
        >
          Login
        </button>
        <p className="mt-2">
          Not have an account?{' '}
          <Link
            to="/register"
            className="text-slate-800 underline hover:text-slate-800/75"
          >
            Create one
          </Link>
          .
        </p>
      </form>
    </FormContainer>
  )
}

export default Login
