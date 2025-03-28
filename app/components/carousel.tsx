"use client"

import React from "react";
import { useEffect, useRef, useState } from 'react'
import LinkedinIcon from "../assets/icons/linkedin"
import ChevronLeft from "../assets/icons/chevronleft"
import ChevronRight from "../assets/icons/chevronright"
import PauseIcon from "../assets/icons/pause"
import PlayIcon from "../assets/icons/play"

const INTEGRANTES_EQUIPO = [
    {
        nombre: "Elena Alonso",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/js4sup0ech0gwicgtynq",
        labor: "Cofounder & CEO",
        linkedin: "https://ar.linkedin.com/in/elena-alonso-economista",
    },
    {
        nombre: "Aroma Vallejo",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/yd3flzmuolmfcgxk1jjn",
        labor: "Wealth Management Relationship",
        linkedin: "https://www.linkedin.com/in/aromajulietavallejo/",
    },
    {
        nombre: "Victoria Jardel",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/xle1pyouc1mka7xmlamr",
        labor: "Local Financial Advisor",
        linkedin: "https://www.linkedin.com/in/victoria-jardel/",
    },
    {
        nombre: "Melany Borgia",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/c29xpzsgofnm0vlhunn4",
        labor: "Jr. Investment Analyst",
        linkedin: "https://www.linkedin.com/in/melany-borgia-093090226/",
    },
    {
        nombre: "Emiliano Sanchez Farés",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/gkyki6kdax7u5wve9l7a",
        labor: "Local Commercial Relationship",
        linkedin: "https://www.linkedin.com/in/emiliano-sanchez-far%C3%A9s-188a1578/",
    },
    {
        nombre: "Fernando Ibarra",
        foto: "https://res.cloudinary.com/dgbsqdjqy/image/upload/f_auto,q_auto/tlinhu4wwlgqkczxlgfz",
        labor: "Asset Management & Investment Specialist",
        linkedin: "https://www.linkedin.com/in/fernando-ibarra-0533a6190/",
    },
]




export default function Carousel() {

    const [isPaused, setIsPaused] = useState(false)
    const [visibleSlides, setVisibleSlides] = useState(4)
    const [isHovered, setIsHovered] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const delay = 3000

    useEffect(() => {
        const updateVisibleSlides = () => {
          const width = window.innerWidth
          if (width < 640) {
            setVisibleSlides(1)
          } else if (width < 1024) {
            setVisibleSlides(2)
          } else if (width < 1280) {
            setVisibleSlides(3)
          } else {
            setVisibleSlides(4)
          }
        }
    
        updateVisibleSlides()
        window.addEventListener('resize', updateVisibleSlides)
        return () => window.removeEventListener('resize', updateVisibleSlides)
      }, [])

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
            handleNext()
        }, delay)

        return () => {
            resetTimeout()
        }
    }, [currentIndex])

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
      }
      
      const handleNext = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
      }      

      useEffect(() => {
        resetTimeout()
      
        if (!isHovered && !isPaused) {
          timeoutRef.current = setTimeout(() => {
            handleNext()
          }, delay)
        }
      
        return () => {
          resetTimeout()
        }
      }, [currentIndex, isHovered, isPaused])
      

      const slideWidthPercent = 100 / visibleSlides + 1.25

      const maxIndex = Math.max(0, INTEGRANTES_EQUIPO.length - visibleSlides)

      useEffect(() => {
        const max = Math.max(0, INTEGRANTES_EQUIPO.length - visibleSlides)
        if (currentIndex > max) setCurrentIndex(max)
      }, [visibleSlides])

    return (
        <div className="relative w-full overflow-hidden px-6 md:overflow-visible">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10 md:hidden" />
            <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10 md:hidden" />
            <div>
                <div className="inline-flex w-full justify-between gap-3 px-5 pb-4 md:px-0">
                    <div className="inline-flex gap-3">
                        <button onClick={handlePrev} className="inline-flex items-center justify-center bg-[#034941] text-white w-10 h-10 rounded-full cursor-pointer hover:bg-[#1C8675] duration-200"><ChevronLeft/></button>
                        <button onClick={handleNext} className="inline-flex items-center justify-center bg-[#034941] text-white w-10 h-10 rounded-full cursor-pointer hover:bg-[#1C8675] duration-200"><ChevronRight/></button>
                    </div>
                    <button onClick={() => setIsPaused(!isPaused)} className="inline-flex items-center justify-center bg-[#034941] text-white w-20 h-10 rounded-full cursor-pointer hover:bg-[#1C8675] duration-200">
                        {isPaused ? <PlayIcon/> : <PauseIcon/>}
                    </button>
                </div>
            </div>
            <div className="flex gap-5 transition-transform ease-out duration-700 md:gap-3" style={{transform: `translateX(calc(-${currentIndex * slideWidthPercent}%))`}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {INTEGRANTES_EQUIPO.map((integrante) => (
                    <article
                        key={integrante.nombre}
                        className="bg-neutral-500 rounded-lg h-[380px] relative bg-cover bg-top bg-no-repeat overflow-hidden flex-shrink-0 group"
                        style={{flex: `0 0 ${visibleSlides === 1 ? '100%' : `calc((100% - ${(visibleSlides - 1) * 1.25}rem) / ${visibleSlides})`}`, backgroundImage: `url(${integrante.foto})`,}}>
                        <div className="absolute p-3 pb-4 bottom-0 from-black to-transparent bg-gradient-to-t w-full rounded-b-lg">
                            <h3 className="text-white text-xl font-bold">{integrante.nombre}</h3>
                            <span className="text-sm text-neutral-300">{integrante.labor}</span>
                        </div>
                        <a href={integrante.linkedin} target="_blank" className="absolute right-3 -top-10 text-xs px-2 py-1 rounded group-hover:top-3 duration-200 md:top-3">
                            <LinkedinIcon/>
                        </a>
                    </article>
                ))}
            </div>
        </div>
    )
}