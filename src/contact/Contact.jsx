import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

   const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Your Form is submitting")
     reset();

  };

 
  return (
    <>
      <form  onSubmit={handleSubmit(onSubmit)}  className="shadow-xl w-[30%] m-auto ">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold">Get in touch</h1>
        </div>
        <div className="  flex  flex-col p-5">
          <div className="flex flex-col pb-6">
            <label>Name</label>
            <input
              className="border-1 rounded p-1 border-[gray]"
              type="name" {...register("name", { required: "Name is required" })}
              placeholder=" Your name"
            ></input>
          </div>
          <div className="flex flex-col pb-6">
            <label>Email</label>
            <input
              className="border-1 rounded p-1 border-[gray]"
              type="email" {...register("email", { required: "Name is required" })}
              placeholder="You@example.com"
            ></input>
          </div>
          <div className="flex flex-col pb-6">
            <label>Phone no.</label>
            <input
              className="border-1 rounded p-1 border-[gray]"
              type="phone no" {...register("phone no", { required: "Name is required" })}
              placeholder="78675647"
            ></input>
          </div>
          <div className="flex flex-col pb-6">
            <label>Message</label>
            <input
              className="border-1 rounded p-1 border-[gray]"
              type="textarea"  {...register("message", { required: "Name is required" })}
              placeholder=" Write your message here...."
            ></input>
          </div>
          <button  className="bg-[blue] p-1 rounded text-white" type="submit" >
            Send Message
          </button>
        </div>
      </form>
      
      &nbsp;
    </>
  );
}
