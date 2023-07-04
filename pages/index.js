import Hero from "@/components/Hero"
import Profile from "@/components/Profile"
import SectionSkills from "@/components/SectionSkills"
import SectionProjects from "@/components/SectionProjects"
import SectionContact from "@/components/SectionContact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </>
  )
}
