import { BrowserRouter,Routes,Route } from "react-router-dom";
import AccountList from "./AdminComponents/AccountList";
import AddMedicine from "./AdminComponents/AddMedicine";
import AddTransaction from "./AdminComponents/AddTransaction";
import MedicineList from "./AdminComponents/MedicineList";
import TransactionList from "./AdminComponents/TransactionList";
import About from "./AllUserComponents/About";
import Home from "./AllUserComponents/Home";
import Login from "./AllUserComponents/Login";
const Main=()=>{
    return(
        <BrowserRouter basename="/ASHMS_React">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admin/medicines" element={<MedicineList/>}/>
            <Route path="/admin/add/medicine" element={<AddMedicine/>}/>
            <Route path="/admin/accounts" element={<AccountList/>}/>
            <Route path="/admin/Add/transaction" element={<AddTransaction/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/admin/transactions" element={<TransactionList/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Main;