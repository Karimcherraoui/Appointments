import { Icon } from '@iconify/react';

export default function Search({onSearch , setSortingOption}){

    return (

        <div className="sm:flex items-center  rounded-l-lg border-2 border-gray-100 pl-2  overflow-hidden my-4 justify-between">
            <div className="flex flex-row justify-center w-full items-center">
                <Icon icon="iconamoon:search-bold" />
                <input onChange={(e)=>onSearch(e.target.value)} className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
            </div>
            <div className="ms:flex items-center  rounded-lg  ">
                <select
                    id="Com"
                    className="text-base text-white outline-none px-4 py-2 bg-blue-400"
                    onChange={(e) => setSortingOption(e.target.value)}
                >
                    <option value="ownerName">Owner Name</option>
                    <option value="petName">Pet Name</option>
                    <option value="ascending">Asc</option>
                    <option value="descending">Desc</option>
                </select>
            </div>
        </div>
)
}