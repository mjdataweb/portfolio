import Header from './components/Header';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main>
        <section id="accueil" className="min-h-screen flex flex-col items-center justify-center">
          <ThreeScene />
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenue sur mon Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Développeur passionné créant des expériences web innovantes et interactives
            </p>
          </div>
        </section>

        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;