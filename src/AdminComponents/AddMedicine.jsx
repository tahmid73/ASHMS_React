import axios from "axios";
import { useState } from "react";
import axiosConfig from "../AllUserComponents/axiosConfig";
import AdminNavbar from "./AdminNavbar";

const AddMedicine=()=>{
    const [chemical_name,setChemical_name]=useState("");
    const [description,setDescription]=useState("");
    const [errs,setErrs] = useState({});
    const [succ,setSucc] = useState({});
    const handleRegistration=(event)=>{
        // debugger;
        event.preventDefault();
        const data={Chemical_name:chemical_name,Description:description};
        axiosConfig.post("medicines/add",data).
        then((succ)=>{
            setSucc(succ.data);
            debugger;
            window.location.href="/ASHMS_React/admin/medicines";
        },(err)=>{
            setErrs(err.response.data);
            console.log(data);
            debugger;
        }

        )
    }
    return(
        <div>
            <AdminNavbar/>
            <div  className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
              <form onSubmit={handleRegistration}>
                <center>
                  <input onChange={(e) => { setChemical_name(e.target.value) }}  type="text"  className="input w-1/2" id="Chemical_Name" placeholder="Name"/>
                  <input onChange={(e) => { setDescription(e.target.value) }} type="text"  className="input w-1/2" id="Description"
                    placeholder="Description"/>
                <span>{errs.Password ? errs.Password[0] : ''}</span><br />
                <input type="submit" value={"Add"} className="whiteButton"/>
                </center>
              </form>
        </div>
</div>
    )
}

export default AddMedicine;