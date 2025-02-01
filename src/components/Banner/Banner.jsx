
import banner from '../../assets/banner-main.png';
import shadow from '../../assets/bg-shadow.png';

export default function Banner({freeCredit}) {
  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Shadow Background */}
      <div className="absolute inset-0 bg-black bg-opacity-100">
        <img
          src={shadow}
          alt="Shadow Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Centered Banner */}
        <img
          src={banner}
          alt="Banner"
          className="max-h-[50vh] w-auto mb-6"
        />

        {/* Text Below Banner */}
        <h1 className="text-3xl font-bold text-white drop-shadow-md">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h2 className="text-xl font-medium text-white mt-2 drop-shadow-md">
          Beyond Boundaries, Beyond Limits
        </h2>
        <div className="mt-4 border-2 border-yellow-300 p-2 rounded-3xl">
           <button onClick={freeCredit} className="px-4 py-2 bg-yellow-300 text-black font-bold rounded-2xl hover:bg-yellow-400 transition">
            Claim Free Credit</button>
        </div>

      </div>
    </div>
  );
}
