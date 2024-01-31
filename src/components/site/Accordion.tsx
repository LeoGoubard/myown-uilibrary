import { IoCodeSlashOutline } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { Dispatch, SetStateAction } from "react";

const Accodrion = ({ setIsOpen, isOpen } : { setIsOpen: Dispatch<SetStateAction<boolean>>; isOpen: boolean; }) => {
  

  return (
    <div className="mt-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex rounded-lg border p-1 text-gray-500 transition dark:border-zinc-700  dark:text-zinc-400">
          <nav className="flex items-center justify-between space-x-2 pl-2">

          <IoCodeSlashOutline className="h-5 w-5 text-gray-500" />
        <button onClick={() => setIsOpen(!isOpen)} className="rounded-md bg-gray-200/[.5] px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:text-white">
          <IoLogoReact className="h-5 w-5" />
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="rounded-md bg-gray-200/[.5] px-3 py-2 text-xs font-medium text-gray-600 hover:text-black dark:bg-zinc-700 dark:text-zinc-400 dark:hover:text-white">
          <BiLogoTailwindCss className="h-5 w-5" />
        </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Accodrion