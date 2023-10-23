import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
        <ClickCounter name='buttonClick'/>
        <HoverCounter name='mouseOver' /> 
        {/* <ErrorBoundary><Hero heroName="Spiderman"/></ErrorBoundary>
        <ErrorBoundary><Hero heroName="Spiderman1"/></ErrorBoundary>
        <ErrorBoundary><Hero heroName="Joker"/></ErrorBoundary> */}
    </div>
  );
}

export default App;
