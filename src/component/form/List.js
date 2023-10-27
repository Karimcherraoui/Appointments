import {Icon} from '@iconify/react';

export default function List({item,onDelete}) {




    // console.log(data);

    return (
            <div className="flex flex-row mt-10 shadow-lg border-1 p-4 justify-between">
                <div className="flex flex-row justify-center items-center">
                    <div className="bg-red-500 rounded-lg w-8 h-8 flex justify-center items-center mr-4">
                        <Icon onClick={()=>onDelete(item.id)} className="text-white text-6xl w-5 h-5" icon="ep:delete"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-blue-500 font-bold">
                            {item.petName}
                        </div>
                        <div className="">
                            <span className="text-blue-400 font-bold text-xs ">Owner: </span>
                            <span className="  text-xs">{item.ownerName}</span>

                            <p className="  text-xs">{item.aptNotes}</p>

                        </div>

                    </div>


                </div>


                <div className="flex items-center">

                    {item.aptDate}

                </div>


            </div>


    )
}