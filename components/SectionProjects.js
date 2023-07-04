import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItem from "./ProjectItem";

SectionTitle

export default function SectionProjects() {
    return(
        <section className="py-20" id="projects">
            <div className="container mx-auto">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Beberapa proyek bikinan saya.</SectionParagraph>
                <div className="flex mt-20 flex-wrap lg:w-10/12 md:w-full items-center mx-auto">
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Hasten"
                            description="Explorasi landing page"
                            image="/Beranda/hasten.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8 ">
                        <ProjectItem
                            name="Resources"
                            description="Explorasi resources page"
                            image="/Beranda/resources.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Resources"
                            description="Explorasi resources page"
                            image="/Beranda/resources.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem
                            name="Hasten"
                            description="Explorasi landing page"
                            image="/Beranda/hasten.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}