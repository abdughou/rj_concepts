import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import RenderPropsCounter from './components/RenderPropsCounter';

function App() {

  const cC = (count, incrementCount) =>  (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)  ;
  const hC = (count, incrementCount) =>  (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)  ;

  return (
    
    <div className="App">
         {/* --- using render props ---- */}


        <RenderPropsCounter render={cC}/>
        <RenderPropsCounter render={hC}/>

        {/* <User render = {(isLoggedIn) => isLoggedIn ? 'Srikanth' : 'Guest'}/> */}


        {/* --- using HOC higher order component ----

        <ClickCounter name='buttonClick'/>
        <HoverCounter name='mouseOver' /> */}


        {/* <ErrorBoundary><Hero heroName="Spiderman"/></ErrorBoundary>
        <ErrorBoundary><Hero heroName="Spiderman1"/></ErrorBoundary>
        <ErrorBoundary><Hero heroName="Joker"/></ErrorBoundary> */}
    </div>
  );
}

export default App;
