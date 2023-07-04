export default function ContactItem({label, value, icon, className}) {
    const addClassName = className ? ` {className}`: "";
    return(
        <div className={`flex items-start ${className}`}>
            <img src={icon} alt="label" className="w-7"/>
            <div className="ml-4">
                <div className="text-sm text-black font-semibold font-sourcesans">{label}</div>
                <div className="text-lg text-black font-semibold font-sourcesans">{value}</div>
            </div>
        </div>
    );
}