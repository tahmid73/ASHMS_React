import { useState } from "react";
import Logout from "../AllUserComponents/Logout";
const AdminNavbar=()=>{
    return(
    <nav class="bg-white border-gray-200 py-2.5">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/ASHMS_React" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap">ASHMS </span>
        </a>
        <div class="flex items-center lg:order-2">
            <Logout/>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/ASHMS_React/admin/add/transaction" class="navbartitle2">Add transaction</a>
                </li>
                <li>
                    <a href="/ASHMS_React/admin/add/medicine" class="navbartitle2">Add Medicine</a>
                </li>
                <li>
                    <a href="/ASHMS_React/admin/medicines" class="navbartitle2">Medicine List</a>
                </li>
                <li>
                    <a href="/ASHMS_React/admin/transactions" class="navbartitle2">Transaction List</a>
                </li>
                <li>
                    <a href="/ASHMS_React/admin/accounts" class="navbartitle2">Account List</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
)
}

export default AdminNavbar;