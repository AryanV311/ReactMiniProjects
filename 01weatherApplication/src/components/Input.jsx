import {BiSearch, BiCurrentLocation} from "react-icons/bi";

const Input = () => {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 item-center justify-center space-x-4">
            <input type="text" placeholder="search by city" className=" text-gray-500 text-xl p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase rounded-xl" />

            <BiSearch size={30} className=" cursor-pointer transition ease-out hover:scale-125 text-white"/>
            <BiCurrentLocation size={30} className=" cursor-pointer transition ease-out hover:scale-125 text-white" />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out hover:scale-125 ">
            °C
            </button>
            <p className="text-2xl font-medium mx-1">|</p>       
            <button className="text-2xl font-medium transition ease-out hover:scale-125 text-white">
            °F
            </button>       
        </div>
    </div>
  )
}

export default Input