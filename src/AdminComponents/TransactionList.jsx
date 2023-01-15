import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig"
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
const TransactionList=()=>{
    const [transactions, setTransactions]=useState([]);
    const [identity, setId] = useState(0);
    const [errs,setErrs] = useState({});

    useEffect(()=>{
        axiosConfig.get("transaction").then((rsp)=>{
            setTransactions(rsp.data); 
            debugger
        },(errs)=>{debugger})
    },[]);

    const Remove = (event) => {
      event.preventDefault();
      axiosConfig.get(`transactions/delete/${identity}`).then((rsp) => {
        window.location.href="/admin/transactions";
          debugger;
      }, (errs) => {
        window.location.href="/admin/transactions";
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
                Appointment
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Total Amount
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Doctor Charge
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Hospital Revenue
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Date
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Status
              </th>
              <th scope="col" className="px-6 py-4 text-left">
              Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
            transactions.map((transaction)=>
            <tr key={ transaction.Id } className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
              <td className="tr">
                { transaction.Id }
              </td>
              <td className="tr">
              { transaction.Total_Amount }
              </td>
              <td className="tr">
              { transaction.Doctor_Charge }
              </td>
              <td className="tr">
                { transaction.Hospital_Revenue }
              </td>
              <td className="tr">
              { transaction.Date }
              </td>
              <td className="tr">
              { transaction.status }
              </td>
              <td className="tr">
              <form onSubmit={Remove}>
                <input className="whiteButton" type="submit" onClick={()=>{setId(transaction.Id)}} value="Delete"/>
              </form>
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

export default TransactionList;    