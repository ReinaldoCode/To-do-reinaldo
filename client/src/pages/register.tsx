
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import { FormRow } from "../Components/form-row";
import axios from "axios";



export const action =  async ({request}) => {
  console.log(request);
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData)
 
  try{
  const response = await axios.post('api/v2/user/register',data)
  console.log(response);
  return redirect("/login");
    }catch(error){
    console.log(error);
    return(error);
  }
};

export const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="flex  h-screen justify-center ">
      <div className="w-96 rounded-md h-96 text-center pt-8 mt-10  bg-gray-700 p-5">
        <Form method="post">
          <h4 className="mt-8 font-bold text-2xl text-blue-400">Register</h4>
          <FormRow type="text" lableText="Name" name="name" defaultValue="" />

          <FormRow
            type="email"
            lableText="Email"
            name="email"
            defaultValue=""
          />
          <FormRow
            type="password"
            lableText="Passowrd"
            name="password"
            defaultValue=""
          />
          <button
            type="submit"
            className="transition ease-in-out delay-100 bg-blue-400 hover:-translate-y-1 mt-4 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20"
            disabled ={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p className="mt-4">
            Already have and account?
            <Link to="/login" className="text-blue-400 hover:text-indigo-400">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};
