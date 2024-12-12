import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
 import { FiWind } from "react-icons/fi";
 import {GiSunrise, GiSunset } from "react-icons/gi";
 import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";


const TeampAndDeatails = () => {
    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel" ,
            value: "22°",
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: "346%",
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: "11 km/h",
        },
    ]

    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: "07:33 AM",
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: "07:45 PM",
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: "37°",
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: "7°",
        },
    ]    
        

  return (
    <div>
        <div className="flex flex-row items-center justify-center text-xl py-6 text-cyan-300">
        <p>Rain</p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="wetaher icon" className="w-20" />

        <p className="text-5xl">34°C</p>
        <div className=" flex flex-col space-y-3 items-start">
            {
                verticalDetails.map(({ id,Icon,title,value}) => (
                <div key={id} className="flex font-light text-sm items-center justify-center">
                    <Icon size={18} className="mr-1"/>
                    {`${title}`}: <span className="font-medium ml-1">{value}</span>
                </div>
                ))
            }   
            </div>
        </div>
            <div className="flex flex-row items-center justify-center text-sm space-x-10 py-3">
                {
                    horizontalDetails.map(({id,Icon,title,value}) => (
                        <div key={id} className="flex flex-row items-center">
                            <Icon size={30} />
                           <p className="font-light ml-1">
                           {`${title}`}: 
                           <span className="font-medium ml-1">{value}</span>
                           </p>
                        </div>
                    ))
                }
                
            </div>
    </div>    
  );
};


export default TeampAndDeatails;