import { footerData } from "../data/footer";
import { GithubIcon, LinkedinIcon, TwitterIcon, Mail } from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500">
      <motion.div
        className="flex flex-wrap items-start gap-10 md:gap-35"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <Link to={"/"}>
          <div className="flex gap-2">
            <img src="/magic.svg" alt="logo" className="h-8.5 w-auto" />
            <h2 className="text-[22px] font-bold text-white">ClickForge</h2>
          </div>
        </Link>
        {footerData.map((section, index) => (
          <div key={index}>
            <p className="text-slate-100 font-semibold">{section.title}</p>
            <ul className="mt-2 space-y-2">
              {section.links.map((link: IFooterLink, index: number) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-indigo-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <p className="max-w-60">
          Making every Youtuber feel valued—no matter the size of your audience.
        </p>
        <div className="flex items-center gap-4 mt-3">
          <a href="#" target="_blank" rel="noreferrer">
            <GithubIcon className="size-5 hover:text-indigo-500" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <LinkedinIcon className="size-5 hover:text-indigo-500" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <TwitterIcon className="size-5 hover:text-indigo-500" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Mail className="size-6 hover:text-indigo-500" />
          </a>
        </div>
        <p className="mt-3 text-center">
          &copy; {new Date().getFullYear()} <a href="#">ClickForge</a>
        </p>
      </motion.div>
    </footer>
  );
}
