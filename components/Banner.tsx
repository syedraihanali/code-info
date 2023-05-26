

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 bg-gray-100">
        <div>
            <h1 className="text-6xl">Code-Info Blogs </h1>

            <h2 className="mt-5 md:mt-3">
                Welcome to{" "} <span className="underline decoration-blue-400 decoration-4 "> Every Developers</span> {" "}
                favorite blog
                
            </h2>
        </div>
        
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            News and Updates about all new and latest technologies | Setups and Tutorials | Features

        </p>
    </div>
  )
}

export default Banner;