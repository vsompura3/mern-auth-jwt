const Home = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section className="mx-auto max-w-2xl py-44">
          <h1 className="text-3xl md:text-6xl font-bold text-center text-white">
            MERN Authentication
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-center text-white">
            A MERN stack application for authentication using{' '}
            <span className="decoration-wavy underline decoration-fuchsia-500 font-semibold">
              JWT
            </span>{' '}
            and{' '}
            <span className="decoration-wavy underline decoration-yellow-500 font-semibold">
              HTTP-Only cookie
            </span>
            .
          </p>
          <div className="mt-24">
            <p className="text-center text-xl text-slate-800 bg-gray-300 p-4 rounded-md shadow">
              You are not logged in.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
