import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <h2 className="text-3xl md:text-4xl text-teal-900 font-bold">
        Create an account
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-6 mt-8">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-lg text-slate-800">
            Enter name:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md text-lg border-2 border-slate-300 text-slate-800"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-lg text-slate-800">
            Enter email:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md text-lg border-2 border-slate-300 text-slate-800"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password" className="text-lg text-slate-800">
            Enter password:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md text-lg border-2 border-slate-300 text-slate-800"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password" className="text-lg text-slate-800">
            Confirm password:
          </label>
          <input
            className="w-full px-4 py-2 rounded-md text-lg border-2 border-slate-300 text-slate-800"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-teal-900 text-white rounded py-2 text-lg hover:bg-teal-800/75"
        >
          Create account
        </button>
        <p className="mt-2 text-slate-800">
          Already have an account.{' '}
          <Link
            to="/login"
            className="text-teal-800 underline hover:text-teal-800/75"
          >
            Login
          </Link>
          .
        </p>
      </form>
    </FormContainer>
  )
}

export default Register
