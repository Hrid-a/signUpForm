
const Button = ({ children, className }) => {
    return (
        // <div>
        <button className={`flex justify-center items-center gap-3 rounded-lg font-serif w-full p-2 text-xl text-white md:text-2xl font-medium ${className} hover:opacity-90`}>
            {children}
        </button>
        // </div>
    )
}

export default Button