import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./routes/RouterConfig.js";
import './App.css';

function App() {
  return (
   <BrowserRouter>
     <RouterConfig />
   </BrowserRouter>
  );
}

export default App;
