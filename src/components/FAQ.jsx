import React, { useEffect, useState } from "react";
import Lists from "./Lists";
import axios from "axios";
import { baseURL } from "../utils/constant";
import { toast } from "react-hot-toast";
import { AddProd } from "./Models";

const FAQ = () => {

  const ls = [{
    key: "kjfnwe",
    id: "task._id",
    task: "hello world",
    setUpdateUI: "setUpdateUI",
    updateMode: "updateMode"
  }
  ]
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [addFaq, setAddFaq] = useState(false);

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get(`https://fruit-ai-five-snowy.vercel.app/faqs`)
      .then((req, res) => {
        setFaqs(req.data);
        toast.success("succefull");
      })
      .catch((e) => { console.log(e) });

  }, [])

  console.log(faqs);

  return (
<>
    <div className="bg-custom-gradient flex flex-col relative justify center items-center font-sakal">
      <div className="font-bold text-[#FFFFFF] text-[3rem] flex pt-10 items-center justify-center">
        FAQ SECTION
      </div>
      <img src='tangerine.png' className='h-20 w-20' />

      <div className='flex flex-col'>
        <p className='text-lg float-right'>How is Tangerine healthy?</p>
        <p className=''>Tangerine are a great health booster due to their
          high vitamin C content, which supports the
          immune system and skin health. </p>
        <div className="flex justify-center items-center pt-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-lg w-[20rem] h-10 p-4 text-xl"
            placeholder="Type Input"
          />
          <button
            className="rounded-lg bg-[#FFE5C2] font-bold text-black py-2 px-5 ml-5 text-xl"
            type="submit"

          >

          </button>
        </div>
        <div className="flex flex-col pt-10">

          {faqs.map((task) => (
            <Lists
              key={task._id}
              id={task._id}
              title={task.title}
              description={task.description}

            />
          ))}
        </div>
          <div className="fixed bottom-7 right-10" onClick={()=>{setAddFaq(true)}}>
            <button className="shadow-xl rounded-full text-white font-semibold hover:bg-gray-950 bg-black px-12 py-3">add FAQ</button>
          </div>
      </div>

    </div>
    {addFaq && (
      <>
      <AddProd mod={()=>{setAddFaq(false)}} />
      <style>{"body{overflow:hidden}"}</style>
      
      </>
    )}
    </>
  );

};

export default FAQ;
