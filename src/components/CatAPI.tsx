'use client'
import React, { useEffect, useState } from 'react';

const CatInfo = () => {
    const [loading, setLoading] = useState(false)
    const [catName, setCatName] = useState('')
    const [catData, setCatData] = useState<any>([]);

    const getData = () => {
        const apiUrl = `https://api.api-ninjas.com/v1/cats?name=${catName}`;
        setLoading(true)
        fetch(apiUrl, {
            method: 'GET',
            headers: { 'X-Api-Key': 'F9PVVXjHm1XJu5ZsM83yjg==35VDMZSc89cRlzJp' },
        })
            .then(response => response.json())
            .then(data => { setCatData(data); setLoading(false) })
            .catch(error => setLoading(false));
    }

    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6">
            <div className="animate-fadeInUp">
                <h3 className="text-2xl font-semibold">Search for Cats</h3>
                <div className="flex space-x-2 mt-2">
                    <input
                        type="text"
                        placeholder="Enter a cat name"
                        className="bg-white text-gray-800 p-3 rounded-l-lg w-full focus:outline-none focus:ring focus:border-blue-300 shadow-md"
                        value={catName}
                        onChange={(e) => setCatName(e.target.value)}
                    />
                    <button
                        type='button'
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg focus:outline-none focus:ring focus:border-white-300 shadow-md transition duration-300 ease-in-out"
                        onClick={getData}
                    >
                        Search
                    </button>
                </div>
            </div>
            {loading ?
                <>
                    <div className='flex items-center justify-center h-screen'>
                        <div className="flex items-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white-500 border-solid"></div>
                            <p className="text-white-600 ml-7">Loading...</p>
                        </div>
                    </div>
                </> : catData.length > 0 ? catData.map((cat: any, key: any) => {
                    return <div key={key}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                            <div className="md:text-right animate-fadeInLeft">
                                <img
                                    src={cat.image_link}
                                    alt={cat.name}
                                    className="w-64 h-auto rounded-lg mx-auto md:mx-0 shadow-md transform hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="text-center md:text-left animate-fadeInRight">
                                <h2 className="text-4xl font-extrabold">{cat.name}</h2>
                                <p className="text-lg mt-2 font-semibold">{cat.origin}</p>
                                <p className="text-lg mt-2">Length: {cat.length}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold text-center animate-fadeInUp">More Information</h3>
                            <div className="bg-white rounded-lg p-4 mt-4 animate-fadeIn">
                                <ul className="list-none flex flex-wrap justify-center">
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Family Friendly:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.family_friendly}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Shedding:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.shedding}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">General Health:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.general_health}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Playfulness:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.playfulness}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Children Friendly:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.children_friendly}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Grooming:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.grooming}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Intelligence:</span><span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.intelligence}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Other Pets Friendly:</span>
                                        <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.other_pets_friendly}</span>
                                    </li>
                                    <li className="text-center p-2">
                                        <span className="font-semibold text-black">Weight Range:</span><span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}> {cat.min_weight} - {cat.max_weight} lbs</span>
                                    </li>
                                    <li className="text-center p-2">
                                        {cat.name}
                                        <span className="font-semibold text-black">Life Expectancy: </span> <span className='text-blue-500' style={{ fontSize: "16px", fontWeight: 'bold' }}>{cat.min_life_expectancy} - {cat.max_life_expectancy} year</span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                })
                    : catName.length > 0 ? <>

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
                                    {
                                    }
                                    <p className="font-semibold">Error</p>
                                    <p>Cound Not Find Information </p>
                                </div>
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
                                 
                                 
                                        <p>PLease Enter the Name </p>
                                    </div>
                                </div>
                            </div>
                        </>
            }
        </div >
    );
};

export default CatInfo;
