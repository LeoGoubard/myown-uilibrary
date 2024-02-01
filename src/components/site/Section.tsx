import React, { useEffect, useState } from 'react'
import { RxLink2 } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import Accordion from './Accordion';
import Code from './Code';

interface SectionProps {
  id?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  codeBlock?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, description, children, codeBlock }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      <Title id={id || title} title={title} />
      <p className="mt-1 text-gray-600 dark:text-white">
        {description}
      </p>
      <Accordion setIsOpen={setIsOpen} isOpen={isOpen} />
      

      <div className="mt-3">
        <div className="flex flex-col rounded-xl border p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {/* preview */}
            {children}
          </div>
          {isOpen && (
            <div className="max-h-[400px] overflow-hidden rounded-b-xl bg-gray-800 transition-[max-height] duration-500 ease-in-out dark:bg-zinc-950">
              <div className="max-h-[400px] overflow-y-scroll rounded-b-xl p-6 dark:border-zinc-700">
                <Code codeBlock={codeBlock || ''} />
              </div>
            </div>  
          )}
        </div>
      </div>
       
    </div>
  )
}

export default Section

export const Title = ({ id, title } : {id: string; title: string; }) => {

  const location = useLocation()

  const scrollToElement = () => {
    const anchor = document.getElementById(id)
    if (anchor) {
      anchor.scrollIntoView({ behavior:"smooth", block: "start" })
    }
  }
  useEffect(() => {
    if (location.hash) {
      if (location.hash === `#${id}`) {
        scrollToElement()
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth"})
    }

    return () => {
      window.scrollTo({ top:0, behavior: "instant" })
    }
  }, [id, location.hash])
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    history.pushState({}, "", `#${id}`)
    scrollToElement()
  }

  return (
    <h2 id={id} className="scroll-mt-24">
      <Link to={`#${id}`} onClick={handleClick} className="group relative text-lg font-bold text-gray-800 dark:text-white">
        <span className="absolute -left-4 top-1 inline-block shrink-0 opacity-0 transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-[2rem] group-hover:-left-6 group-hover:opacity-100">
          <RxLink2 className="h-3.5 w-3.5 text-emerald-600" />
        </span>
          {title}
      </Link>
    </h2>
  )
}

