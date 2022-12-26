import { useEffect, useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig"
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
const AccountList=()=>{
    const [accounts, setAccounts]=useState([]);
    const [identity, setId] = useState(0);
    const [errs,setErrs] = useState({});

    useEffect(()=>{
        axiosConfig.get("accounts").then((rsp)=>{
            setAccounts(rsp.data); 
            debugger
        },(errs)=>{debugger})
    },[]);

    const Remove = (event) => {
      event.preventDefault();
      axiosConfig.get(`accounts/delete/${identity}`).then((rsp) => {
        window.location.href="/admin/accounts";
          debugger;
      }, (errs) => {
        window.location.href="/admin/accounts";
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
                Revenue
              </th>
              <th scope="col" className="px-6 py-4 text-left">
                Transaction Type
              </th>
              <th scope="col" className="px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" className="px-6 py-4 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {
            accounts.map((account)=>
            <tr key={ account.Id } className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
              <td className="tr">
                { account.Id }
              </td>
              <td className="tr">
              { account.Revenue }
              </td>
              <td className="tr">
              { account.Transaction_type }
              </td>
              <td className="tr">
              { account.Date }
              </td>
              <td className="tr">
              <form onSubmit={Remove}>
                <input type="submit" onClick={()=>{setId(account.Id)}} name="Delete"/>
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

export default AccountList;    