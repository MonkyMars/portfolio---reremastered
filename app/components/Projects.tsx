'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
interface projects {
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
}

const Projects = () => {
  const router = useRouter();
  const projects: projects[] = [
    {
      title: "CarList",
      description: `CarList is a Next.js project I made on my own, It hasn't got its own database but rather uses multiple API's to fetch the data, such as model names, specs and images. Use the feature CarFinder to find the specs of the entered car. CarList uses 100% TypeScript and Scss.`,
      date: "26/10/2024",
      image: "/carlists.png",
      href: "https://www.github.com/MonkyMars/CarList",
    },
    {
      title: "Something",
      description: `Something is a webstore I designed in JavaScript and TypeScript combined with Next.js. The webapp features logging in with jwt and next-auth as well as saving user preferences. The backend is in TypeScript and SupaBase is used for hosting the data, such as accounts and real time cart. For the design and mainly the fonts I took inspiration from Nothing.tech©.`,
      date: "16/9/2024",
      image: "/something-keyboards.png",
      href: "https://github.com/MonkyMars/Something-Keyboards"
    },
    {
      title: "SchoolTool",
      description:
        "SchoolTool is an ELO (electronic learn environment). You can use SchoolTool to take notes in class, check your homework and assignments as well as plan your entire day using the build in calendar. This project is in JavaScript, Next.js since I did not know TypeScript at the time.",
      date: "1/9/2024",
      image: "/schooltool.png",
      href: "https://github.com/MonkyMars/SchoolTool"
    },
    {
      title: "ChatNest",
      description: `ChatNest was my first real project. I made multiple versions and each version topped the previous one looking at complexity. The first one was in plain HTML, CSS and Js, and the last one was in Next.js. ChatNest is a social media platform including private messaging, account creation and updating, posting stories (e.g., tweets) and having full customization over your profile`,
      date: "20/7/2024",
      image: "/chatnest.png",
      href: "https://github.com/MonkyMars/ChatNest/"
    },
    {
      title: "Amber Gallery",
      description:
        "A personal gallery for my girlfriend where she can save her artwork with selected categories and locations. This project is made in TypeScript and Scss, with Supabase being used for backend services. Such as storing artworks, analytics and securely storing account details.", 
      date: "16/11/2024",
      image: "/amber-gallery.png",
      href: "https://github.com/MonkyMars/amber-gallery/"
    },
    {
      title: "Frame The Beat",
      description:
        "Frame The Beat is a collection of albumcovers. Save and share your favorite albumcovers with your friends. Frame The Beat is made in Next.js and TypeScript, the backend is in TypeScript and uses SupaBase for hosting the data.",
      date: "7/12/2024",
      image: "/frame-the-beat.png",
      href: "https://github.com/MonkyMars/framethebeat/"
    },
  ];
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100" id="projects">
      <h2 className="text-2xl font-doto font-extrabold text-gray-800 mb-6 flex items-center gap-2">
        Projects
        <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
      </h2>
      <div className="grid gap-8">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="group hover:bg-gray-50 rounded-xl p-6 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-sm text-primary-600 font-medium">
                  {project.date}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 hover:underline decoration-primary-500 cursor-pointer" onClick={() => router.push(project.href)}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-3">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
