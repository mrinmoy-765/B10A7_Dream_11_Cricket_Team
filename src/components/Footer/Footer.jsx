import logo from '../../assets/logo-footer.png';
export default function Footer() {
  return (
    <div className="bg-slate-950">
        <div className="grid place-items-center pt-72">
            <img src={logo} alt="" />
        </div>
        <div className="grid grid-cols-3 gap-4 px-48 pt-24  pb-36">
            <div className="pr-24">
                <h1 className="font-semibold text-lg text-white mb-2">About Us</h1>
                <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className="pl-32">
                <h1  className="font-semibold text-lg text-white mb-2">Quick Links</h1>
                 <div className="text-gray-400">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
               </div>
            </div>
            <div className="pl-32">
                <h1 className="font-semibold text-lg text-white mb-2">Subscribe</h1>
                <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                <div className="flex mt-4">
                       <input
                          type="text"
                          placeholder="Enter your email"
                          className="rounded-l-md px-4 py-2 border border-gray-300"
                          />
                        <button
                           className="rounded-r-md px-4 py-2 border font-semibold border-gray-300 text-black"
                           style={{backgroundImage: "linear-gradient(to bottom, #F28ACC, #DBC63A)",}}>Subscribe
                        </button>
                </div>
            </div>

        </div>
       <div className="text-center py-7 border-t-2 border-gray-400">
           <h1 className="text-gray-400">@2024 Your Company All Rights Reserved.</h1>
       </div>
    </div>
  )
}
