export default function Button({href, className, variant, children, pill}) {
    const addclassName = className ? ' ${className}' : '';

    const variants = {
        "yellow": `text-black bg-[#FCE72D] px-[56px] py-[14px] mx-auto hover:bg-yellow-400 transition ease-in-out duration-300`,
        "outline-yellow": `border-full border-[1.5px] py-[10px] px-9 border-[#FCE72D] text-[#FCE72D] hover:text-black hover:bg-[#FCE72D] transition ease-in-out duration-300`,
        "black": `text-white bg-[#000000] px-[56px] py-[14px] mx-auto hover:bg-opacity-70 transition ease-in-out duration-300`,
    };

    const pickedVariant = variants[variant];

    return(
        <a href={href} className={` font-semibold text-lg font-sourcesans inline-block ${pill ? " rounded-full" : ""} ${pickedVariant}${addclassName}`}>
            {children}
        </a>
    )
}