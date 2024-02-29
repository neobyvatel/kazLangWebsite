import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mt-10 flex-1">
          <MainComponent />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
