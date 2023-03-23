import "./css/style.css"
import Displaytodo from './component/Displaytodo';
import Todos from "./component/Todos" 
function App() {
  return (
    <div className="App">
    <h1>Keep Notes</h1>
      <Todos />
      <Displaytodo />
    </div>
  );
}

export default App;
