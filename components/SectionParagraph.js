export default function SectionParagraph({left, children}) {
    return (
        <p className={`text-[#808080] mt-2 font-sourcesans text-lg ${!left ? "text-center" : ""}`}>{children}</p>
    );
}