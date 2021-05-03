import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Lately from "./pages/Lately";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Report from "./pages/Report";

function App() {
  return (
    <div className="App">
      <Header/>
           <Route exact path="/" component={Lately}/>
           <Route path="/popular" component={Popular}/>
           <Route path="/search" component={Search}/>
           <Route path="/report" component={Report}/>
      <Footer/>
    </div>
  );
}
export default App;
