import {Icon} from '@iconify/react';
import {createContext, useEffect, useState} from "react";
import List from "./List";
import Search from "./Search";
import axios from "axios";


export default function Form() {

    const [state, setState] = useState(false)
    const [data, setData] = useState([])


    const [formData, setFormData] = useState({
        petName: "",
        ownerName: "",
        aptNotes: "",
        aptDate: "",
        aptTime: ""



    })
    const switchBoutton = () => {
        setState(!state)
    }
    const fn = (e) => {
        e.preventDefault()
        for (const key in formData) {
            if(!formData[key].trim())
                return alert(key + " is required")
        }
        const {aptDate ,aptTime, ...rest } = formData
        const date = aptDate + " " + aptTime
        setData([...data, {...rest,aptDate:date , id:crypto.randomUUID()}])

        setFormData({
            petName: "",
            ownerName: "",
            aptNotes: "",
            aptDate: "",
            aptTime: ""

        });

    };


    const onDelete = (id)=>{
        setData (data.filter((el)=>el.id !== id ))
    }

    useEffect(() => {
        axios.get("data.json")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.error("Error fetching data: ", err);
            })
    }, []);

    const dataContext = createContext(null)

    return (
        <>

        <div className="border  ">
            <div className="my-6 flex  gap-4 items-center ">
                <Icon className="text-red-500 text-6xl" icon="teenyicons:appointments-outline"/>
                <p className="text-4xl font-light">Your Appointments</p>
            </div>
            <div onClick={switchBoutton} className=" text-xl w-full bg-blue-500 text-white flex gap-2 items-center px-4 py-4 rounded-t-lg" >
                <Icon icon="teenyicons:appointments-outline"/>
                Add Appointment
            </div>
            <div className={state ? "hidden" : " w-full  p-12"}>
                <div className=" w-full  bg-white ">
                    <form onSubmit={fn}>
                        <div className="mb-5 flex flex-row">
                            <label htmlFor="name" className="mb-3 w-1/3 block text-base font-medium text-[#07074D]">
                                Owner Name
                            </label>
                            <input onChange={(event) => setFormData({ ...formData, ownerName: event.target.value })}
                                       value={formData.ownerName} type="text" name="name" id="name" placeholder="Owner Name"
                                   className="w-1/3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5 flex flex-row">
                            <label htmlFor="petName" className="mb-3 w-1/3  block text-base font-medium text-[#07074D]">
                                Pet Name
                            </label>
                            <input onChange={(event) => setFormData({ ...formData, petName: event.target.value })}
                                   value={formData.petName}  type="text" name="petName" id="phone"
                                   placeholder="Enter your Pet Name"
                                   className=" w-1/3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>

                        <div className="mb-5 flex flex-row">
                            <label htmlFor="date" className="mb-3 w-1/3  block text-base font-medium text-[#07074D]">
                                Date
                            </label>
                            <input onChange={(event) => setFormData({ ...formData, aptDate: event.target.value })}
                                   value={formData.aptDate}  type="date" name="date" id="date"
                                   className=" w-1/3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5 flex flex-row">
                            <label htmlFor="time" className="mb-3 w-1/3  block text-base font-medium text-[#07074D]">
                                Time
                            </label>
                            <input onChange={(event) => setFormData({ ...formData, aptTime: event.target.value })}
                                   value={formData.aptTime} type="time" name="time" id="time"
                                   className=" w-1/3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>
                        <div className="mb-5 flex flex-row">
                            <label htmlFor="email" className="mb-3 w-1/3  block text-base font-medium text-[#07074D]">
                                Appointment Note
                            </label>
                            <textarea onChange={(event) => setFormData({ ...formData, aptNotes: event.target.value })}
                                      value={formData.aptNotes}
                                       id="appointmentNote" name="appointmentNote" rows="4"
                                      cols="70" placeholder="Detailled comments about the condition"
                                      className=" rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="hover:shadow-form  rounded-md bg-blue-400 py-3 px-6 text-center text-base font-semibold text-white outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

            <Search />
            {data.map((item,index)=>(
            <List key = {item.id} item = {item}  onDelete={onDelete}/>

            ))}
        </>
    )
}
