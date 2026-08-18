import React from 'react'
import SkillCard from './SkillCard'
import { skills } from '../data/skill'
import { Send } from 'lucide-react'


export default function Skills() {
  return (
    <>
      <section className="py-10 bg-[#080B1A]"> 

          <div className="max-w-7xl mx-auto px-6 md:px-12">  

                    <p className="uppercase tracking-widest text-violet-500 text-sm"> My Skills </p>

                    <h2 className="text-4xl font-bold text-white mb-10"> Technologies I work with </h2>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl">

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

                              { skills.map((item,index)=>(

                            <div key={index} className={`py-8 ${ index!==skills.length-1 ? "lg:border-r lg:border-slate-700": "" }`} > 

                                    <SkillCard title={item.title}

                                    Icon={item.icon}

                                    color={item.color}

                                    skills={item.skills} />

                            </div>

                            ))} 

                          </div>

                  </div>
         </div>

      </section>

    </>
  )
}
