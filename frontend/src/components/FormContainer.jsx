/* eslint-disable react/prop-types */
const FormContainer = ({ children }) => {
  return (
    <div
      className="relative max-w-[45ch] mx-auto p-8 md:p-12 rounded-md mt-32 shadow-xl bg-white before:absolute before:-inset-2 before:rounded-[inherit] before:-z-10
      after:absolute after:-inset-2 after:rounded-[inherit] after:-z-10 after:blur-[3.5rem]
      houdini-gradient"
    >
      {children}
    </div>
  )
}

export default FormContainer
