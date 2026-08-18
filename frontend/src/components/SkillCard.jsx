export default function SkillCard({
    title,
    Icon,
    color,
    skills,
}) {

    return ( 

    <div className="flex-1 px-8"> 

                <div className="flex items-center gap-3 mb-6"> 

                        <div className={`w-10 h-10 rounded-full flex justify-center items-center bg-slate-800 ${color}`}>

                                <Icon size={20}/>

                        </div>

                        <h3 className="font-semibold text-white">{title}</h3>

                </div> 

                <div className="space-y-3">

                                { skills.map((skill,index) => (

                                <div key={index} className="flex items-center gap-3"> 

                                    <div className="w-2 h-2 rounded-full bg-violet-500"/> 

                                        <span className="text-slate-300"> {skill} </span>

                                    </div>
                            ))}

                </div>

    </div>

    )

}