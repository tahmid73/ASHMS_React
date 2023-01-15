import axiosConfig from './axiosConfig';
const Logout = () => {
    const logout = () => {
        axiosConfig.get("logout").then
            ((rsp) => {
                debugger;
                window.location.href = "/ASHMS_React/login";
            }, (error) => {
                debugger
            })
    }
    return (
        <div>
            <button className='login' onClick={()=>{logout();}} value={"LOGOUT"}>LOGOUT</button>
        </div>
    )
}

export default Logout;