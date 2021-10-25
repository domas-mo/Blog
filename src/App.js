import SpaceShip from './components/SpaceShip';

import ResetStyle from './components/styled/Reset';
import GlobalStyle from './components/styled/GlobalStyle';

function App() {
  return (
    <div className="App">
      <ResetStyle/>
      <GlobalStyle/>
	    <SpaceShip />
    </div>
  );
}

export default App;