import Student from './components/Student';
import Home from './components/component-list/Home'

// const data = [
//   'Jun Song', 'Tony Park', 'Magaret Alice'
// ]

function App() {
  return (
    <div className="App">
      
      {/* {data.map((e) => (
        <Student key={e} name={e} />
      ))} */}
      <Home></Home>

    </div>
  );
}

export default App;
