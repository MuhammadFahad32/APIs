'use client'
import React, { useEffect, useState } from 'react'



const WheatherAPI = () => {
    const [city, setCity] = useState('narowal')
    const [loading, setLoading] = useState(true)
    const [weatherData, setWeatherData] = useState({
        cloud_pct: 0,
        feels_like: 0,
        humidity: 0,
        max_temp: 0,
        min_temp: 0,
        sunrise: 0,
        sunset: 0,
        temp: 0,
        wind_degrees: 0,
        wind_speed: 0
    })

    useEffect(() => {
        getData()
    }, []);

    const date = () => {
        // const currentDate =  new Date();
        // const  options: any  = {year: 'year' , month:'long', day:'2-digit'}
        // const formattedDate: any = currentDate.toLocaleDateString('en-US', options);
        // return formattedDate;
        return (new Date()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    }

    const getData = () => {
        const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${city}`;
        setLoading(true)
        fetch(apiUrl, {
            method: 'GET',
            headers: { 'X-Api-Key': 'F9PVVXjHm1XJu5ZsM83yjg==35VDMZSc89cRlzJp' },
        })
            .then(response => response.json())
            .then(data => { setWeatherData(data); setLoading(false) })
            .catch(error => setLoading(false));
    }

    const time = (timeCode: any) => {
        const timestampMilliseconds = timeCode * 1000;
        const date = new Date(timestampMilliseconds);
        const formattedTime = date.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
        return formattedTime;

    }

    return (
        <>
            <div className="mx-auto p-4 bg-purple-400 h-screen flex justify-center">
                <div className="flex flex-wrap">
                    <div className="w-full   px-2">
                        <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
                            <h1 style={{textAlign:'center' , marginTop:'20px' ,fontSize:'32px'}}>Weather Updates</h1>
                            <div className="flex items-center justify-center mt-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for a city..."
                                        className=" border-white-500 bg-transparent w-64 py-3 px-4 rounded-full shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-white"
                                        onChange={(e) => setCity(e.target.value)}
                                        value={city.charAt(0).toUpperCase() + city.slice(1)}
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full flex items-center"
                                        onClick={getData}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                            {loading ?
                                <>
                                    <div className="flex items-center loader ">
                                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 border-solid"></div>
                                        <p className="text-white-600 ml-7">Loading...</p>
                                    </div>
                                </> : weatherData.temp ?
                                    <>
                                        <div className="px-6 py-6 relative">
                                            <div className="flex mb-4 justify-between items-center">
                                                <div>
                                                    <h5 className="mb-0 font-medium text-xl">{city.charAt(0).toUpperCase() + city.slice(1)}</h5>
                                                    <h6 className="mb-0">{date()}</h6><small>{weatherData.cloud_pct > 50 ? 'Cloudy' : 'Clear'}</small>
                                                </div>
                                                <div className="text-right">
                                                    <h3 className="font-bold text-4xl mb-0"><span>{weatherData.temp}&deg;</span></h3>
                                                </div>
                                            </div>
                                            <div className="block sm:flex justify-between items-center flex-wrap">
                                                <div className="w-full sm:w-1/2">
                                                    <div className="flex mb-2 justify-between items-center"><span>Temp</span><small className="px-2 inline-block">{weatherData.temp}&nbsp;&deg;</small></div>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                    <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block">{weatherData.feels_like}&nbsp;&deg;</small></div>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                    <div className="flex mb-2 justify-between items-center"><span>Temp min</span><small className="px-2 inline-block">{weatherData.min_temp}&nbsp;&deg;</small></div>
                                                </div>
                                                <div className="w-full sm:w-1/2">
                                                    <div className="flex mb-2 justify-between items-center"><span>Temp max</span><small className="px-2 inline-block">{weatherData.max_temp}&nbsp;&deg;</small></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap"><span className="inline-block px-3"><small>Forecast</small></span></div>
                                        <div className="px-6 py-6 relative">
                                            <div className="text-center justify-between items-center flex" style={{ flexFlow: "initial" }}>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Wind Speed</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.wind_speed}</span></div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Humidity</span><img src="https://i.imgur.com/BQbzoKt.png" className="block w-8 h-8" /><span className="block my-1">{weatherData.humidity}</span></div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Wind degrees</span><img className="block w-8 h-8" /><span className="block my-1">{weatherData.wind_degrees}&deg;</span></div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Sun Set</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">{time(weatherData.sunset)}</span></div>
                                                <div className="text-center mb-0 flex items-center justify-center flex-col"><span className="block my-1">Sun Rise</span><img src="https://i.imgur.com/ffgW9JQ.png" className="block w-8 h-8" /><span className="block my-1">{time(weatherData.sunrise)}</span></div>
                                            </div>
                                        </div>
                                    </> :
                                    <>
                                        <div className="m-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md shadow-md">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 mr-2">
                                                    <svg
                                                        className="w-full h-full text-red-500"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm1 11a1 1 0 0 1-2 0V7a1 1 0 1 1 2 0v6zm0 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">Error</p>
                                                    <p>Cound Not Find Weather for the {city}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}
export default WheatherAPI

