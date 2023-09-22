import logo from './logo.svg';
import './App.css';
import StateTutorial from './UseState/StateTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ContextTutorial from './UseContext/ContextTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
import FormTutorial from './Form/FormTutorial';
import CallBackTutorial from './UseCallback/CallBackTutorial';

function App() {
  return (
    <div className="App">
     {/* <StateTutorial /> */}
     {/* <ReducerTutorial /> */}
     {/* <EffectTutorial /> */}
     {/* <RefTutorial /> */}
     {/* <LayoutEffectTutorial /> */}
     {/* <ContextTutorial /> */}
     {/* <MemoTutorial /> */}
     {/* <FormTutorial /> */}
     <CallBackTutorial />
    </div>
  );
}

export default App;
