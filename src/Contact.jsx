import { useEffect, useState } from "react";

export default function Contact() {



    const[list ,setList]=useState({
       
        name:"",
        email:"",
        message:""
    })
    
    const [arList,setArList]=useState([])

   const SendFunction=(e)=>{
       e.preventDefault()


       const oldData = localStorage.getItem('dataContact');
       const currentList = oldData ? JSON.parse(oldData) : [];
       const updatedList = [...currentList, list];

       const data=JSON.stringify(updatedList)
       
       localStorage.setItem('dataContact',data)

       setList({ name: "", email: "", message: "" });

   }


   useEffect(()=>{

    
     const datajat=localStorage.getItem('dataContact')
     if(datajat){

      const tahwilData=JSON.parse(datajat)

      setArList(tahwilData)

     }



   },[])
   

  

  return (
    <div className="min-h-screen bg-gray-50">

      
      <div className="py-10 flex justify-center items-center bg-black">
        <h2 className="text-white font-bold text-3xl">
          OUR NEW COLLECTION
        </h2>
      </div>

     
      <div className="flex justify-center items-center py-16 px-4">

        <form className="w-full max-w-md space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md" onSubmit={SendFunction}>
         
       
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="name">
              Name
            </label>
            <input
              value={list.name}
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              onChange={(e)=>setList({...list , name : e.target.value})}
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="email">
              Email
            </label>
            <input
             value={list.email}
              type="email"
              placeholder="Your email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              onChange={(e)=>setList({...list , email : e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="message">
              Message
            </label>
            <textarea
              value={list.message}
              rows="4"
              placeholder="Your message"
              className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              onChange={(e)=>setList({...list , message : e.target.value})}
            />
          </div>

          
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>


     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-10">
  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
    <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
    <button >Les Messages:</button>
  </h3>

  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-700 border-b border-gray-200">
        <tr>
          <th className="px-6 py-4 font-medium">Name</th>
          <th className="px-6 py-4 font-medium">Email</th>
          <th className="px-6 py-4 font-medium">Message</th>
        </tr>
      </thead>
      
      <tbody className="divide-y divide-gray-200 border-t border-gray-200">
        
       {arList.map((item,index)=>(

          <tr key={index}>

        <td className="border border-gray-300" >{item.name} </td>
        <td className="border border-gray-300" >{item.email} </td>
        <td className="border border-gray-300" >{item.message} </td>
          </tr>
       


       ))
}
    
        
      </tbody>
    </table>
  </div>
</div>

     
    </div>

    
  );
}