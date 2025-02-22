const About = () => {
  const about_me_text: string[] = [
    `I'm Levi Noppers, a ${(() => {
      const birthDate = new Date(2009, 6, 8);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    })()}-year-old software developer from The Hague, Netherlands, passionate about creating innovative web applications.`,
    `My journey in software development began at age 12 with a Discord Bot project, and since then, I've been continuously expanding my skills, particularly in front-end development.`,
    `As a front-end specialist with back-end knowledge, I focus on delivering professional, well-functioning applications. My portfolio includes multiple full-stack web applications and API development experience.`,
    `I'm committed to continuous learning and actively seek opportunities to enhance my skills, whether it's mastering new frameworks or optimizing development practices.`,
    `Being fluent in both English and Dutch, I'm eager to collaborate with developers globally and contribute to dynamic team environments.`,
  ];
  return (
    <section
      className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
      id="about"
    >
      <h2 className="text-2xl font-doto font-extrabold text-gray-800 mb-6 flex items-center gap-2">
        About Me
        <div className="h-1 w-24 bg-primary-500 rounded-full"></div>
      </h2>
      <div className="space-y-4">
        {about_me_text.map((text, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
