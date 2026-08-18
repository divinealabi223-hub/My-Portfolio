// // import ContactInfo from "./Contactinfo"
// // import ContactForm from "./ContactForm"

// // export default function Contact() {

// // return (

// // <section className="py-20">

// // <div className="max-w-7xl mx-auto px-6">

// // <p className="text-violet-500 uppercase tracking-widest text-sm">

// // Get In Touch

// // </p>

// // <h2 className="text-4xl font-bold text-white mt-2">

// // Let's work together

// // </h2>

// // <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

// // <div className="lg:col-span-2">

// // <ContactForm/>

// // </div>

// // <ContactInfo/>

// // </div>

// // </div>

// // </section>

// // )

// // }

// import { Send } from 'lucide-react'
// import React, { useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

// function contact() {
//     const navigate = useNavigate();
//     const [ form, setForm ] = useState({
//        name: "",
//        email: "", 
//        project:"",
//        projectBuject: "",
//        about: "" 
//     });

//     async function onSubmit() {
//         //FORM SUBMIT LOGIC
//     }
//   return (
//     <>
//         <div className='bg-[#080B1A] min-h-100'>
//             <div className='min-h-90 mx-auto px-6'> 
//               <h1 className='text-purple-700 font-bold text-center md:hidden'>GET IN TOUCH</h1> 
//               <h3 className='text-white text-2xl font-bold text-center md:hidden'>Let's work together</h3> 

//               <div className='flex md:hidden my-3'> 
//                  <button className='flex items-center justify-center text-white py-2 px-2 bg-purple-700 rounded-md gap-2 font-medium w-full'>Send a Message<Send size={20} /></button>
//               </div>

//               <div>
//                  <h1 className='text-purple-700 font-bold'>GET IN TOUCH</h1> 
//               <h3 className='text-white text-2xl font-bold'>Let's work together</h3> 
              
//             <div className='flex my-5'> 
//                 <form onSubmit={onSubmit}>
//                   <input 
//                   className='border border-gray-500 rounded-md p-2 text-white text-sm outline-none'
//                   type="text" 
//                   placeholder='Your Name' 
//                   /> 

//                   <input 
//                   className='border border-gray-500 rounded-md p-2 text-white text-sm outline-none'
//                   type="email" 
//                   placeholder='Enter Your Email' 
//                   /> 

//                   <input className='border border-gray-500 rounded-md p-2 text-white text-sm outline-none'
//                   type="text" 
//                   placeholder='Project'
//                   /> 
//                  </form>
//             </div>

//               </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default contact


import { Send, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        project: "",
        projectType: "",
        budjet: "",
        about: "",
    });
    const [open, setOpen] = useState(false);
    const Navigate = useNavigate();
  return (
    <>
        <div className='bg-[#080B1A] py-6'> 
            <div className='px-6 md:px-12 p-8 max-h-7xl mx-auto'> 
                 <div className='flex md:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-violet-500 text-xl font-bold'>LET'S WORK TOGETHER</h2>
                        <h3 className='text-2xl text-white font-bold'>Have a project in mind?</h3>
                        <p className='text-white text-sm mt-2'>I'm currently available for freelance work.</p>
                        <p className='text-white text-sm'>Let's build something amazing together.</p>
                    </div>

                        <div className='hidden md:flex'> 
                            <form> 
                                <div className='flex space-x-3'> 

                                        <div> 
                                            <input type="text"
                                            placeholder='Your Name'
                                            value={form.name}
                                            onChange={(e) => setForm({...form, name: e.target.value})}
                                            className='placeholder-gray-300 border border-gray-700 rounded-md p-1.5 outline-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md px-2'
                                            /> 
                                    </div>

                                        <div> 
                                            <input type="email"
                                            placeholder='Your Email'
                                            value={form.email} 
                                            onChange={(e) => setForm({...form, email: (e).target.value})}
                                            className='placeholder-gray-300 border border-gray-700 rounded-md p-1.5 outline-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md px-2'
                                            /> 
                                    </div> 

                                            
                                        <div className='border-gray-700 text-white placeholder-gray-300 border rounded-md p-1.5 focus:outline-none flex justify-between items-center px-2'> 
                                            <input type="text"
                                            placeholder='Project Type'
                                            value={form.ProjectType}
                                            onChange={(e) => setForm({...form, ProjectType: (e.target.value)})}
                                            className='outline-none'
                                            /> 
                                          <button>
                                          {!open ? <ChevronDown className='cursor-pointer' size={15} /> : <ChevronUp className='cursor-pointer' size={15} />}
                                          </button>
                                        </div>

                                </div>
                                        <div className='flex space-x-3 mt-3'>     
                                            <div> 
                                                <input type="text"
                                                placeholder='Project'
                                                value={form.project} 
                                                onChange={(e) => setForm({...form, project: (e).target.value})}
                                                className='placeholder-gray-300 border border-gray-700 rounded-md p-1.5 outline-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md px-2'
                                                /> 
                                            </div> 

                                            <div> 
                                                <input type="text"
                                                placeholder='Your Budjet (Optional)'
                                                value={form.budjet} 
                                                onChange={(e) => setForm({...form, budjet: (e).target.value})} 
                                                className='placeholder-gray-300 border border-gray-700 rounded-md p-1.5 outline-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md px-2'
                                                /> 
                                        </div> 
                                </div>

                                <div className='flex justify-between items-center mt-3 gap-3'>  
                                        <textarea
                                        rows="2" 
                                        placeholder="Your Message"
                                        className="w-full bg-slate-950 border border-slate-700 rounded-md p-3 text-white outline-none focus:border-violet-500"
                                        />

                                        <button className="block w-80 py-2 rounded-md bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-semibold hover:scale-[1.02] duration-300 cursor-pointer" >

                                        Send Message →

                                        </button>
                                 </div>
                            </form>
                        </div>

                </div>  
               
                 <button className="my-3 md:hidden w-60 py-2 rounded-md bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-semibold hover:scale-[1.02] duration-300 cursor-pointer" onClick={() => Navigate('/contact')} > Send Message → </button>
            </div>
        </div>
    </>
  )
}

export default ContactForm

