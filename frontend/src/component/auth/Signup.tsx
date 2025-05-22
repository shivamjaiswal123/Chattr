function Signup() {
  return (
    <div className="flex h-screen">
      {/* left */}
      <div className="flex-1 text-3xl self-center text-center">Chattr</div>
      {/* right */}
      <div className="flex-1 self-center space-y-2">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-600">Create a new account</p>
        <div className="flex flex-col gap-4 w-sm">
          <input
            type="text"
            id="fullname"
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Full name"
            required
          />

          <input
            type="text"
            id="email"
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Email address"
            required
          />
          <input
            type="text"
            id="password"
            className="border border-gray-300 text-sm rounded-lg p-2.5"
            placeholder="Password"
            required
          />

          <button className="bg-indigo-500 px-3 py-1.5 rounded-md font-semibold text-white tracking-wide cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
