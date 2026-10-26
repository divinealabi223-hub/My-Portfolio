import React from 'react'
import { MapPin, Mail, Zap, Contact } from 'lucide-react'
import Pics from '../assets/Image.png'

const details = [
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria' },
  { icon: Zap, label: 'Current focus', value: 'Full-stack development' },
  { icon: Contact, label: 'Phone Number', value: '+2347071568407' },
  { icon: Mail, label: 'Email', value: 'divinealabi223@gmail.com', href: 'mailto:divinealabi223@gmail.com' },
]

function About() {
  return (
    <section className="bg-[#080B1A] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">About me</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Building thoughtful experiences with code.
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            I enjoy turning ideas into clear, responsive web experiences that are useful, accessible, and built to grow.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-violet-600/20 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-3 shadow-2xl">
              <img
                src={Pics}
                alt="Divine Alabi"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center gap-3 px-3 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p className="text-sm font-medium text-slate-200">Open to work</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Hi, I’m Divine Alabi.</h3>
            <p className="mt-5 leading-7 text-slate-300">
              I started in frontend development, creating modern interfaces with React and Tailwind CSS. I’m now growing my backend skills with Node.js so I can build more complete web applications, from the user experience through to the server.
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              I’m motivated by solving real problems, learning through hands-on projects, and writing code that makes products easier to use.
            </p>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex min-w-0 items-start gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <Icon size={18} className="mt-0.5 shrink-0 text-violet-400" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</dt> 
                    <dd className="mt-1 break-words text-sm font-medium text-slate-200">
                      {href ? <a className="transition-colors hover:text-violet-300" href={href}>{value}</a> : value}
                    </dd>
                  </div> 
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
