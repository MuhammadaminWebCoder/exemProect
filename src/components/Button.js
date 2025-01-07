function Button({ title, closeIcon, extraClass ,onClick, type}) {
    return (
        <button onClick={onClick} type={type} className={`flex items-center gap-2 px-4 h-[41px] bg-green-500 rounded-md   ${extraClass}`}>
            {title}
            {closeIcon}
        </button>
    )
}
export default Button