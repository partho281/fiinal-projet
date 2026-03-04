import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/Usercontext";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  // const {signInUser} = useContext(AuthContext);

  const { createUser,updataUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleUserRegistration = (data) => {
    
    createUser(data?.email, data?.password)
      .then((result) => {
        const user = result.user;
        const updating = {
          displayName:data?.name
        }
        updataUser(updating);
        saveUser(data.name,data.email)
       
        toast.success("Successfully User Created");
      })
      .then((err) => {
        console.log(err);
      });
  };
  const saveUser =(name,email)=>{
  const user = {name:name,email:email}
  // fetch('/') user post hbe
  }

  return (
    <div className=" mx-auto card shadow-2xl mt-10 w-96">
      <div className="card-body ">
        <form
          onSubmit={handleSubmit(handleUserRegistration)}
          className="fieldset"
        >
          <div>
            <label className="label">Name</label>
            <input
              className="input w-full"
              {...register("name", { required: "Name is required" })}
              placeholder="type your name"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label className="label">Email</label>
            <input
              className="input w-full"
              {...register("email", { required: "Email Adress is required" })}
              placeholder="type your email "
              type="text"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label className="label">Password</label>
            <input
              className="input w-full"
              {...register("password", {
                required: "password  is required",
                minLength: {
                  value: 6,
                  message: "password should six characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[@$#^&+-=!])(?=.*[0-9])/,
                  message:
                    "Password should be one special characters,one capital and number",
                },
              })}
              placeholder="type your password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="mt-2">
              <input
                type="Submit"
                className="input w-full bg-primary text-white cursor-pointer"
              />
            </div>
            <p className="text-primary label ">
              Already have an Account?{" "}
              <Link className="underline" to="/signin">
                Login Please
              </Link>
            </p>
          </div>
        </form>
        <div className="grid grid-cols-2 gap-3">
          <button className="input w-full bg-primary text-white cursor-pointer">
            Continue With Google
          </button>
          <button className="input w-full bg-primary text-white cursor-pointer">
            Continue With Github
          </button>
        </div>
      </div>

      <Toaster/>
    </div>
  );
};

export default SignUp;
