function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#030611] px-5 py-16 md:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-10 rounded-xl border border-indigo-400/20 bg-[#080d22] p-6 md:grid-cols-2 md:p-8">

        {/* Left Side */}
        <div>
          <p className="mb-3 text-sm font-bold tracking-wider text-blue-400">
            LET'S WORK TOGETHER
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            I'm currently available for freelance work.
            <br />
            Let's build something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/alabidivine307@gmail.com"
          method="POST"
          className="grid gap-3 sm:grid-cols-2"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Project Enquiry"
          />

          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for sending your inquiry! I have received your message and will review your project details. I'll get back to you as soon as possible. Thank you for considering me for your project!"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-500"
          />

          <select
            name="project_type"
            defaultValue=""
            required
            className="rounded-lg border border-white/10 bg-[#111629] px-4 py-3 text-sm text-gray-300 outline-none focus:border-purple-500 sm:col-span-2"
          >
            <option value="" disabled>
              Project Type
            </option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce Website">E-commerce Website</option>
            <option value="Portfolio Website">Portfolio Website</option>
            <option value="Church Website">Church Website</option>
            <option value="Real Estate Website">Real Estate Website</option>
            <option value="Web Application">Web Application</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="project_title"
            placeholder="Project (Optional)"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-500"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget (Optional)"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="3"
            required
            className="resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-purple-500 sm:col-span-2"
          />

          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 sm:col-span-2 cursor-pointer"
          >
            Send Message <span className="ml-2">➤</span> 
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact