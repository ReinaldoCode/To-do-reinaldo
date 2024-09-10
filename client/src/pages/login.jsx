import React from "react";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { FormRow } from "../Components/form-row";
import axios from "axios";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    const response = await axios.post('/api/v2/user/login',data)
    const token = response.data.token;
    if(token){
      localStorage.setItem('jwtToken', token);
      return redirect("/to-do");
    }else{
      throw new Error("Token not found");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";


  return (
     <div className="flex  h-screen justify-center ">
      <div className="w-96 rounded-md h-96 text-center pt-8 mt-10  bg-gray-700 p-5">
        <Form method="post">
          <h4 className="mt-8 font-bold text-2xl text-blue-400">Login</h4>
          <FormRow
            type="email"
            lableText="Email"
            name="email"
            defaultValue="email@gmail.com"
          />
          <FormRow
            type="password"
            lableText="Password"
            name="password"
            defaultValue="1234"
          />
          <button
            type="submit"
            className="transition ease-in-out delay-100 bg-blue-400 hover:-translate-y-1 mt-4 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20"
            disabled ={isSubmitting}
          >
             {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p className="mt-4">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-400 hover:text-indigo-400"
            >
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  
  );
};
