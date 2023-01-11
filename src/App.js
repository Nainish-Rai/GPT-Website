import "./App.css";
import { Navbar, CTA, Brand } from "./components";
import { Blog, Features, Footer, Header, Info, Possiblity } from "./containers";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Info />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
