export default function ProjectItem({name, description, image}) {
    return(
        <article className="text-center">
            <img src={image} alt={name} className="w-full rounded-lg"/>
            <h3 className="text-xl text-black font-semibold mt-4 mb-1">{name}</h3>
            <p className="text-lg text-[#808080]">{description}</p>
        </article>
    );
}