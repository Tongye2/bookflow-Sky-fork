function signUpUser() {
  return (
    <div className="Signup-main-div flex h-screen w-screen justify-evenly items-center flex-col bg-black">
      <div className="navBar-div flex w-[100%] justify-between">
        <div className="flex text-white pl-[3rem] pt-[1rem]">Logo</div>
        <div className="flex text-white pr-[3rem] pt-[1rem]">Test</div>
      </div>

      <div
        className="bgPic absolute h-screen w-screen bg-[url('./assets/book-bg.jpg')] bg-cover bg-center opacity-10"
        style={{ pointerEvents: "none" }}
      />
      <div className="Signup-wrapper-div flex h-screen w-screen justify-evenly items-center">
        <form method="POST" action="" className="inputFields-div flex flex-col">
          <div className="name-div flex mb-[2rem]">
            <input
              className="flex w-[10rem] mr-[0.5rem] p-[0.5rem] placeholder:text-[#D5C5AE] text-[#D5C5AE] rounded-xl border-[0.2rem] outline-none bg-transparent border-[#D5C5AE]"
              placeholder="First name"
              type="text"
            />
            <input
              className="flex w-[10rem] mr-[0.5rem] p-[0.5rem] placeholder:text-[#D5C5AE] text-[#D5C5AE] rounded-xl border-[0.2rem] outline-none bg-transparent border-[#D5C5AE]"
              placeholder="Last name"
              type="text"
            />
          </div>

          <div className="others-div flex flex-col">
            <input
              className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
              placeholder="Username"
              type="text"
            />
            <input
              className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
              placeholder="Home Address"
              type="text"
            />
            <input
              className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
              placeholder="Phone Number"
              type="text"
            />

            <button className="flex border mt-[3rem] border-[#D5C5AE] transition-[0.1s] hover:text-black hover:bg-[#D5C5AE] text-[#D5C5AE] justify-center rounded-lg  p-[0.5rem] w-[20.5rem]">
              <a
                className="w-[20.5rem]"
                href="http://localhost:5173/BookFlow-Password"
              >
                Next
              </a>
            </button>
          </div>
        </form>

        <div className="divPic flex  text-white">
          <svg
            width="20rem"
            height="20rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#D5C5AE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default signUpUser;
