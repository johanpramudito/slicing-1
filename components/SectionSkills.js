import SectionTitle from "@/components/SectionTitle";
import SectionParagraph from "@/components/SectionParagraph";
import SkillCard from "./SkillCard";

export default function SectionSkills(){
    return (
        <section className="py-28 bg-[#F7F7FB]" id="skills">
            <div className="container mx-auto">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
                <div className="flex  mt-20 flex-wrap lg:w-10/12 md:w-full justify-center items-center content-center mx-auto">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="Javascript"
                            level="Lanjutan"
                            image="/Beranda/javascript.svg"
                            imageClassName="rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="React Js"
                            level="Menengah"
                            image="/Beranda/react.svg"
                            imageClassName=""
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="Node Js"
                            level="Lanjutan"
                            image="/Beranda/nodejs.svg"
                            imageClassName=""
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="Node Js"
                            level="Lanjutan"
                            image="/Beranda/nodejs.svg"
                            imageClassName=""
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="Javascript"
                            level="Lanjutan"
                            image="/Beranda/javascript.svg"
                            imageClassName="rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="React Js"
                            level="Menengah"
                            image="/Beranda/react.svg"
                            imageClassName=""
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="React Js"
                            level="Menengah"
                            image="/Beranda/react.svg"
                            imageClassName=""
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="Node Js"
                            level="Lanjutan"
                            image="/Beranda/nodejs.svg"
                            imageClassName=""
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard
                            name="Javascript"
                            level="Lanjutan"
                            image="/Beranda/javascript.svg"
                            imageClassName="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}