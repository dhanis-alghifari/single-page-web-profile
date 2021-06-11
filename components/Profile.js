import SectionParagraph from "./SectionParagraph"
import SectionTitle from "./SectionTitle"

export default function Profile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph>A little thing about me.</SectionParagraph>

                <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                    <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                        <img src="/profilee.png" className="w-full" />
                    </div>
                    <div className="md:w-7/12 w-full px-10">
                        <p className="text-lg leading-relaxed">Hello, I'Am Dhanis Al Ghifari, I started my career as a front end developer since 2019. I usually use React JS technology to create the interface.</p>
                        <p className="text-lg mt-6 leading-relaxed">I really love in the world of web development, especially the front end web development. Because the Front-End is the face of a web. The work of the Front-End is a look that will be seen by people. When can be seen and satisfy people, there I have pride. Therefore, I select Front-End web.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
