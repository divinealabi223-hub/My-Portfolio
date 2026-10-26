import { useState } from "react";
import Logo from "../assets/Logo1.png";
import { ArrowDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false); 

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" }, 
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }, 
  ];

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Logo"
            className="w-28 sm:w-32"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 font-['Poppins'] font-bold text-white md:flex">
          {links.map((link) => ( 
            <li key={link.name}> 
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-purple-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <a
          href="/Divine_Alabi_Full_Stack_Developer.pdf"
          download="Divine_Alabi_Full_Stack_Developer.pdf"
          className="hidden rounded-md border border-purple-500 px-4 py-2 font-['Poppins'] text-sm font-semibold text-white transition duration-300 hover:bg-purple-500 md:inline-block"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <motion.button 
          type="button"
          whileTap={{ scale: 0.85 }}
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white md:hidden cursor-pointer"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {open ? <X size={27} /> : <Menu size={27} />}
            </motion.span> 
          </AnimatePresence> 
          
        </motion.button> 
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 top-20 z-40 bg-black md:hidden"
            />

            {/* Sliding Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed right-0 top-20 z-50 flex h-[calc(100dvh-5rem)] w-[82%] max-w-sm flex-col border-l border-purple-500/20 bg-slate-950 px-6 py-8 shadow-2xl md:hidden"
            >
              {/* <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-purple-400">
                Navigation
              </p> */}

              {/* Drawer Links */}
              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="rounded-lg border border-transparent px-4 py-4 font-['Poppins'] text-lg font-semibold text-white transition duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CV Button */}
              <motion.a
                href="/Divine_Alabi_Full_Stack_Developer.pdf"
                download="Divine_Alabi_Full_Stack_Developer.pdf"
                onClick={closeMenu}
                whileTap={{ scale: 0.97 }}
                className="mt-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:brightness-110"
              >
                Download My CV
              </motion.a>

              <div className="mt-auto border-t border-white/10 pt-5">
                <p className="text-sm text-slate-400">
                  Let's build something amazing.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;