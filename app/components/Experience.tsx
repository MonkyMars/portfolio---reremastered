interface experiences {
  title: string;
  description: string;
  date: string;
}

const Experiences = () => {
  const experiences: experiences[] = [
    {
      title: "First Steps in Programming",
      date: "27/11/2022",
      description: "Developed and deployed my first application: a Discord bot using Python",
    },
    {
      title: "Career Focus Shift",
      date: "29/12/2023",
      description:
        "Committed to pursuing software development as a career path, establishing a structured learning routine",
    },
    {
      title: "Q42 Internship",
      date: "06/01/2025",
      description:
        "Secured internship position at Q42, a leading software development company in The Hague, Netherlands",
    },
    {
      title: "Independent Full-Stack Developer",
      date: "Present",
      description: "Actively developing full-stack applications and expanding technical expertise through daily project work",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-1 border-[rgba(255,255,255, 0.1)]" id="experience">
      <h2 className="text-2xl font-doto font-extrabold text-gray-800 mb-6 flex items-center gap-2">
        Experience
        <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
      </h2>
      <div className="grid gap-6">
        {experiences?.map((exp, index) => (
          <div
            key={index}
            className="border-l-4 border-primary-500 pl-4 py-2 bg-gray-50/90 rounded-r-lg"
          >
            <span className="text-sm text-primary-600 font-medium">
              {exp.date}
            </span>
            <h4 className="text-lg font-semibold text-gray-800 mt-1">
              {exp.title}
            </h4>
            <p className="text-gray-600 mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
