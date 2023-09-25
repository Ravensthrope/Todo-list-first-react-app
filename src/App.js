import './App.css';
import Todo from './Components/Todo'
import Header from './Components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Todo />
      </div>
    </>
  );
}

export default App;
