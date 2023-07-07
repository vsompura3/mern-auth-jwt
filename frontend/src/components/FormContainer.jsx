/* eslint-disable react/prop-types */
const FormContainer = ({ children }) => {
  return (
    <div className="max-w-[45ch] mx-auto p-12 rounded-lg mt-32 shadow-xl bg-slate-200">
      {children}
    </div>
  )
}

export default FormContainer
