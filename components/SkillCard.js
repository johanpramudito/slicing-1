export default function SkillCard({name, level, image, imageClassName}) {
    const addImageClassName = imageClassName ? `${imageClassName}` : "";

    return(
        <div className="bg-white shadow-skill rounded-lg p-5 flex items-center">
            <img src={image} alt={name} className={`mr-6 h-16 ${addImageClassName}`}/>
                <div>
                    <h4 className="text-lg text-black font-semibold">{name}</h4>
                    <p className="text-sm text-[#A3A3A3] font-semibold mt-1">{level}</p>
                </div>
        </div>
    );
}