
const FormField = ({ register, id, label, ...rest }) => {
    return (
        <div className="grid gap-3 relative py-2">
            <input id={id} placeholder="First Name" className="peer py-2 px-4 border border-1 border-base-neutral-light rounded-lg placeholder-transparent focus:outline-none focus:ring  focus:ring-orange-50 text-base-neutral-dark" {...register(id)} {...rest} />

            <label htmlFor={id} className="text-base-neutral-dark font-semibold absolute -top-5 left-3 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base-neutral-light peer-focus:-top-5 peer-focus:text-base-neutral-dark  transition-all cursor-pointer">{label}</label>
        </div>
    )
}

export default FormField