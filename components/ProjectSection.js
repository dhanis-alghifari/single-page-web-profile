import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
    return (
        <section className="py-28" id="projects">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Some of the projects I've worked on.</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Dashboard Agree"
                            description="Web Application"
                            image="/agree.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Portal KMK PEN"
                            description="Web Application"
                            image="/portal-kmk-pen.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
