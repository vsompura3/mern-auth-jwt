/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import FormContainer from '../components/FormContainer'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector(state => state.auth)

  useEffect(() => {
    if (userInfo) navigate('/')
  }, [navigate, userInfo])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <FormContainer>
      <h2 className="text-3xl md:text-4xl text-teal-900 font-bold">LogIn</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 mt-8">
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
        <button
          type="submit"
          className="bg-teal-900 text-white rounded py-2 text-lg hover:bg-teal-800/75"
        >
          Login
        </button>
        <p className="mt-2 text-slate-800">
          Not have an account?{' '}
          <Link
            to="/register"
            className="text-teal-800 underline hover:text-teal-800/75"
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
