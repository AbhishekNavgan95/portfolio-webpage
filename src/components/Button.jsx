import React from 'react'

const Button = ({ children, onClick, type, className }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`rounded-lg border-accent-medium text-center
                gap-1 hover:gap-3  px-5 md:text-xl py-1 sm:py-2 
                bg-accnt-light text-f-light hover:font-bold hover:bg-f-light hover:text-dark active:scale-[0.98] border hover:border-f-light
                focus:font-bold focus:outline-none transition-all 
                duration-300 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button