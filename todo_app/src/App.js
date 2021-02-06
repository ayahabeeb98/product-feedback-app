import {useEffect} from 'react';
import Header from "./components/Header";

import TodoWrapper from "./components/TodoWrapper";

function App() {

  useEffect(() => {
    document.documentElement.classList.add('dark-theme');
  });

  return (
  <>
    <Header/>
    <TodoWrapper/>
    </>

      );
}

export default App;
