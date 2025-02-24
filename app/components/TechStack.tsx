import Image from "next/image";

interface TechStackItem {
  label: string;
  iconSrc: string;
  experience: number;
  note: string;
  type: string;
}

const TechStack = () => {
  const stack: TechStackItem[] = [
    {
      label: "Next.js",
      iconSrc: "nextjs",
      experience: 2023,
      note: "Next.js has been by far my favorite framework ever. It's extremely fast, amazing for SEO and easy to use, especially if you come from React; Like me.",
      type: "framework",
    },
    {
      label: "Tailwind CSS",
      iconSrc: "tailwindcss",
      experience: 2024,
      note: "At first I was skeptical about Tailwind CSS because I thought it would take away creativity, but after using it for a while I can't imagine going back to vanilla CSS.",
      type: "framework",
    },
    {
      label: "TypeScript",
      iconSrc: "typescript",
      experience: 2023,
      note: "TypeScript is a must-have for any serious project. It helps me to catch errors before they even happen.",
      type: "language",
    },
    {
      label: "Python",
      iconSrc: "python",
      experience: 2022,
      note: "I've used Python for a while now, mostly in school and for my projects at the beginning of my journey.",
      type: "language",
    },
    {
      label: "React",
      iconSrc: "react",
      experience: 2023,
      note: "React is a great library for a first web framework to learn. Although I prefer Next.js, I still use React for smaller projects.",
      type: "library",
    },
    {
      label: "Git",
      iconSrc: "git",
      experience: 2023,
      note: "Git is a must-have for me. I use it for every project I work on, even if it's just a small project.",
      type: "tool",
    },
  ];

  return (
    <section
      className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-1 border-[rgba(255,255,255, 0.1)]"
      id="techstack"
    >
      <h2 className="text-2xl font-doto font-extrabold text-gray-800 mb-6 flex items-center gap-2">
        Tech Stack
        <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
      </h2>
      <div className="grid gap-8">
        {stack
          ?.sort((a, b) => b.experience - a.experience)
          .map((stackItem, index) => (
            <div
              key={index}
              className="group hover:bg-gray-50 p-6 transform hover:translate-x-1 
              border-l-4 border-primary-500 duration-300 transition-all bg-slate-200/50"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-16 h-16 relative bg-gray-100 rounded-lg p-3 transition-colors group-hover:bg-white">
                  <Image
                    src={`/icons/${stackItem.iconSrc.toLocaleLowerCase()}.png`}
                    alt={stackItem.label}
                    className="w-full h-full object-contain group-hover:scale-105 transition-all duration-100"
                    fill
                    draggable={false}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {stackItem.label}
                    </h3>
                    <span className="text-sm px-3 py-1 bg-primary-100 text-primary-600 rounded-full font-medium">
                      {stackItem.type.charAt(0).toUpperCase() +
                        stackItem.type.slice(1).toLowerCase()}
                    </span>
                  </div>
                  <span className="text-sm text-primary-600 font-medium block mt-2">
                    Since {stackItem.experience}
                  </span>
                  <p className="text-gray-600 mt-2">{stackItem.note}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TechStack;
