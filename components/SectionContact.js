import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";
import Field from "./Field";
import Button from "./Button";

export default function ContactSection() {
    return (
        <section  className="container mx-auto bg-white" id="contact">
            <div className="bg-[#F7F7FB] p-14 md:w-10/12 w-full flex rounded-lg mx-auto flex-wrap">
                <div className="md:w-6/12 w-full md:border-r hp:border-b md:border-b-0 border-[#E8E8FB]">
                    <div className="lg:py-16 lg:px-10 md:p-10 hp:p-5">
                        <SectionTitle left>Contact</SectionTitle>
                        <SectionParagraph left>Beberapa cara menghubungi saya.</SectionParagraph>
                        <ContactItem
                            label="Mail"
                            icon="/Beranda/mail.svg"
                            value="hi@jo.han"
                            className="mt-10"
                        />
                        <ContactItem
                            label="Phone"
                            icon="/Beranda/phone.svg"
                            value="081234567890"
                            className="mt-10"
                        />
                        <ContactItem
                            label="Twitter"
                            icon="/Beranda/twitter.svg"
                            value="@johan_pramudito"
                            className="mt-10"
                        />
                    </div>
                </div>
                <div className="md:w-6/12 w-full">
                    <form className="lg:py-16 lg:px-10 md:p-10 hp:p-5">
                        <div className="flex flex-wrap -mx-4">
                            <div className="lg:w-6/12 px-4 hp:w-full">
                                <Field 
                                    label="Name"
                                    name="name"
                                    type="text"
                                />
                            </div>
                            <div className="lg:w-6/12 px-4 hp:w-full">
                                <Field 
                                    label="Mail"
                                    name="mail"
                                    type="text"
                                />
                            </div>
                        </div>
                        <Field className="px-2"
                            label="Subject"
                            name="subject"
                            type="text"
                        />
                        <Field className=" h-40 px-2 w-full"
                            label="Message"
                            name="message"
                            type="textarea"
                        />
                        <div className="text-right">
                            <Button variant="black" >Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}