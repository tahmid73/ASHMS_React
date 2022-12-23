import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig"
import Navbar from "../AllUserComponents/Navbar";
import axios from "axios";
const MedicineList=()=>{
    const [medicines, setMedicines]=useState([]);
    const [errs,setErrs] = useState({});

    useEffect(()=>{
        axiosConfig.get("/medicines").then((rsp)=>{
            setMedicines(rsp.data); 
            debugger
        },(err)=>{debugger})
    },[]);

    return(
        <div className="flex flex-col">
            <Navbar/>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-800 text-white border-b text-sm font-medium">
            <tr>
              {/* <th scope="col" className=" px-6 py-4 text-left">
                #
              </th> */}
              <th scope="col" className="px-6 py-4 text-left">
                Id
              </th>
              <th scope="col" className="px-6 py-4 text-left">
                Chemical Name
              </th>
              <th scope="col" className="px-6 py-4 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {
            medicines.map((medicine)=>
            <tr key={ medicine.Id } className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
              <td className="tr">
                { medicine.Id }
              </td>
              <td className="tr">
              { medicine.Chemical_Name }
              </td>
              <td className="tr">
              { medicine.Description }
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}

export default MedicineList;    