import shadow from "../../assets/bg-shadow.png";

export default function NewsLetter() {
  return (
    <div className="relative w-full flex justify-center">
      {/* Wrapper for positioning */}
      <div className="absolute -top-[150px] w-[calc(100%-256px)] mx-[128px] p-3 border-2 border-white rounded-3xl">
        <div className="relative rounded-3xl overflow-hidden border-2 border-white">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-white bg-opacity-100 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url(${shadow})` }}
          ></div>

          {/* Content Container */}
          <div className="relative flex flex-col items-center justify-center h-[300px] text-black text-center p-6">
            <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p className="mt-2">Get the latest updates and news right in your inbox!</p>

            {/* Input & Button Container */}
            <div className="flex mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-l-md px-4 py-3 border border-gray-300 text-black w-64"
              />
              <button
                className="rounded-r-md px-6 py-3 border font-semibold border-gray-300 text-black"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #F28ACC, #DBC63A)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



