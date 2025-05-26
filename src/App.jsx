import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBoard from "./components/Task/TaskBoard";

function App() {
  return (
    <main className="bg-dark font-[Inter] text-white">
      <Header />
      <Hero/>
      
      <TaskBoard/>
      <Footer/>
    </main>
  );
}

export default App;
