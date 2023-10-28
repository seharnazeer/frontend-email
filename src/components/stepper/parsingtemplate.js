import React, { useState } from "react";
import { useStatevalue } from "../../ccontext/stateProvider";
import axios from "axios";
const ParsingTemplate = () => {
  const [{ inboxname }, dispatch] = useStatevalue();
  const [rules, setrules] = useState("");
  console.log(rules);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/makeTemplate", {
      rules: rules.split(","),
      inboxname,
      userid: JSON.parse(sessionStorage.getItem("userid")),
    });
    console.log(result.data.message);
    // settemplate(result.data.message.rules);
  };
  return (
    <div className="flex flex-col">
      <p className="font-bold">Create a template</p>
      <p className="text-grey-color">
        Name the attributes seperated with , to extract from email.
      </p>
      <input
        onChange={({ target: { value } }) => {
          setrules(value);
          sessionStorage.setItem("templates", JSON.stringify(value));
        }}
        required
        className="border-dashed border-blue-900 border-2 p-4"
        type="text"
        placeholder="Write Custom Email Templates"
      />
      {/* <button onClick={()=>sessionStorage.setItem('templates',JSON.stringify(rules))} className='bg-blue-color rounded-md w-full text-white mt-4 h-10'>Create</button> */}
    </div>
  );
};

export default ParsingTemplate;
