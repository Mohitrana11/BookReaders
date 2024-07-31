// import React from 'react'

import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
function Login() {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm();
    //   const onSubmit = (data)=>{
    //     const userInfo = {
    //         email: data.email,
    //         password: data.password,
    //     };s
    //     console.log(userInfo);
    //   }
  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
           <form method="dialog" > {/* onSubmit={handleSubmit(onSubmit)} */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
           <div className="w">
            <h1 className="text-[20px] font-semibold mb-3">Please Login</h1>
            <div className="mt-5" >
                <p className="mb-2 text-[17px]">Email</p>
            <input type="text" placeholder="Email" className="outline-none border px-4 py-3 rounded-xl w-full max-w-xs"   />
            {/* {...register('email',{required:true})}
            {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
            )} */}
            </div>

            <div  className="mt-5">
            <p  className="mb-2 text-[17px]">Password</p>
            <input type="text" placeholder="Password" className="outline-none border px-4 py-3 rounded-xl w-full max-w-xs" />
            {/* {...register('password',{required:true})} 
            {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
            )} */}
            </div>
            <div className="flex flex-row justify-between items-center mt-6 ">
            <button className="btn btn-secondary">Login</button>
            <p>new Register??<Link to={'/signup'} className="underline text-blue-500 cursor-pointer">SignIn</Link>  
            </p>
            </div>
           </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
