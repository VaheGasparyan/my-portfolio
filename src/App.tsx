import {useEffect} from "react";
import {scrollReveal} from "utils/scrollReveal";

import Main from 'main';
import './App.css';

const App = () => {
    useEffect(() => {
        scrollReveal();
    }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
