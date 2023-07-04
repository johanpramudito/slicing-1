export default function SectionTitle({left, children}) {
    return(
        <h2 className={`text-2xl font-semibold text-black font-plexmono ${!left ? "text-center" : ""}`}>{children}</h2>
    )
}