// import ReactApexChart from "react-apexcharts"
// import axiosConfig from "./../AllUserComponents/axiosConfig"
// import { useEffect, useState } from "react";

// const MonthlyChart=()=>{
//     const [Revenue,setRevenue]=useState([]);
//     const [month,setMonth]=useState([]);
//     const [option,setOption]=useState("");

//     useEffect(()=>{
//       axiosConfig.post("accounts").then
//       ((rsp)=>{
//         debugger
//         for(const dataObj of rsp.data.data){
//             setRevenue()
//         }
//       },(err)=>{
//         debugger
//       })
//     },[])
//       const series= [{
//           data: Revenue
//         }];
//       const options= {
//           chart: {
//             height: 350,
//             type: 'bar',
//             events: {
//               click: function(chart, w, e) {
//                 // console.log(chart, w, e)
//               }
//             }
//           },
//           // colors: colors,
//           plotOptions: {
//             bar: {
//               columnWidth: '45%',
//               distributed: true,
//             }
//           },
//           dataLabels: {
//             enabled: false
//           },
//           legend: {
//             show: true
//           },
//           xaxis: {
//             categories: month,
//             labels: {
//               style: {
//               //   colors: colors,
//                 fontSize: '12px'
//               }
//             }
//           }
//         };

//     const change=(e)=>
//     {
//         setOption(e.target.value);
//         console.log(option)
//         debugger
//         if (e.target.value==="daily")
//         {
//             debugger  
//             window.location.href="/customer/chart";
//         }
//         else if (e.target.value==="monthly")
//         {
//             window.location.href="/customer/chart/monthly";
//         }
//         else if (e.target.value==="yearly")
//         {
//             window.location.href="/customer/chart/yearly";
//         }
//     }
//     return(
//         <div>
//             <br/>
//             <select name="search" onChange={(e)=>{change(e)}}>
//                 <option value="monthly">MONTHLY EXPENSE</option>
//                 <option value="daily">DAILY EXPENSE</option>
//                 <option value="yearly">YEARLY EXPENSE</option>
//             </select>

//             <h4>MONTHLY EXPENSE</h4>
//             <ReactApexChart options={options} series={series} type="bar" height={350} />
//         </div>
//     )
// }

// export default MonthlyChart;