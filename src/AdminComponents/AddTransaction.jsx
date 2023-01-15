import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig"
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
const AddTransaction=()=>{
    const [appoinments, setAppoinments]=useState([]);
    const [doctor, setDoctor] = useState([]);
    const [identity, setId] = useState(0);
    const [doctorId, setDoctorId] = useState(0);
    const [doctorFee, setDoctorFee] = useState(0);
    const [date, setDate] = useState(0);
    const [errs,setErrs] = useState({});
    const [succ,setSucc] = useState({});

    useEffect(()=>{
        axiosConfig.get("appointments").then((rsp)=>{
            setAppoinments(rsp.data);     
            debugger
        },(errs)=>{debugger})
    },[]);

    const Remove = (event) => {
      event.preventDefault();
      axiosConfig.get(`appoinments/delete/${identity}`).then((rsp) => {
        window.location.href="/ASHMS_React/admin/add/transaction";
          debugger;
      }, (errs) => {
        window.location.href="/ASHMS_React/admin/transactions";
          debugger;
      })
    }

    const Add = (event) => {
        event.preventDefault();
        axiosConfig.get(`doctors/${doctorId}`).then((rsp) => {
          // setDoctor(rsp.data);
          // setDoctorFee(rsp.data.Appointment_Fees)
          const data={Appoinment_Id:identity,Total_Amount:rsp.data.Appointment_Fees,Doctor_Charge:rsp.data.Appointment_Fees*0.80,Hospital_Revenue:rsp.data.Appointment_Fees*0.20,date:date}
          axiosConfig.post("transaction/add/",data).
        then((succ)=>{
            setSucc(succ.data);
            debugger;
            window.location.href="/ASHMS_React/admin/transactions";
        },(err)=>{
            setErrs(err.response.data);
            console.log(data);
            debugger;
        }

        )
        }, (errs) => {
            debugger;
        })
      }

    return(
        <div className="flex flex-col">
            <AdminNavbar/>
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
              Doctor Id
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Patient Id
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Started At
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Ended At
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Status
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Revisit Count
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Delete
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Add Transaction
              </th>
            </tr>
          </thead>
          <tbody>
            {
            appoinments.map((appoinment)=>
                appoinment.status=="Complete"
                ?
            <tr key={ appoinment.Id } className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
              <td className="tr">
                { appoinment.Id }
              </td>
              <td className="tr">
              { appoinment.Doctor_Id }
              </td>
              <td className="tr">
              { appoinment.Patient_Id }
              </td>
              <td className="tr">
              { appoinment.startedAt }
              </td>
              <td className="tr">
              { appoinment.endedAt }
              </td>
              <td className="tr">
              { appoinment.status }
              </td>
              <td className="tr">
              { appoinment.revisit_count }
              </td>
              <td className="tr">
              <form onSubmit={Remove}>
                <input className="whiteButton" type="submit" onClick={()=>{setId(appoinment.Id)}} value="Delete"/>
              </form>
              </td>
              <td className="tr">
              <form onSubmit={Add}>
                <input className="whiteButton" type="submit" onClick={()=>{setId(appoinment.Id);setDoctorId(appoinment.Doctor_Id);setDate(new Date().toLocaleString())}} value="Add Transaction"/>
              </form>
              </td>
            </tr>
                :""
            
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}

export default AddTransaction;    