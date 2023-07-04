import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function Profile() {
    return (
        <section className="py-28 bg-white" id="profile">
            <div className="container mx-auto">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>Mengenal saya secara singkat.</SectionParagraph>
                <div className="flex lg:items-center md:items-start lg:w-10/12 w-full mt-14 mx-auto flex-wrap">
                    <div className="flex md:w-[26%] hp:w-full items-center mr-10 mx-auto justify-center">
                        <img src="/Beranda/profile.png" alt="profile" className="w-full hp:ml-10 sm:ml-0" />
                    </div>
                    <div className="md:w-[56.5%] hp:w-full px-10 hp:py-10 md:py-0">
                        <p className="text-lg text-black leading-relaxed"> Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis condimentum ornare ante a posuere. Aliquam sem magna, sodales quis congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros. Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus ligula, id viverra mi erat at nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ac aliquet eros.</p>

                        <p className="text-lg text-black mt-5 leading-relaxed">Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl. Mauris ut dolor posuere augue porta lobortis nec sed lacus. Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus mollis, id vehicula nulla dictum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}