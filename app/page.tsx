import type { NextPage } from "next";
import Aside from "./components/Aside";
import Navigation from "./components/Navigation";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section with Aside */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Profile Card */}
            <Aside />

            {/* Main Content */}
            <div className="md:col-span-8 lg:col-span-9">
              {/* Navigation */}
              <Navigation />

              {/* About Section */}
              <About />

              {/* Experience Section */}
              <Experiences />

              {/* Projects Section */}
              <Projects />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;
