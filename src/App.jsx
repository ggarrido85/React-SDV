
import './App.css'
import PanelResult from './components/Panel/PanelResult'
import PanelSearch from './components/Panel/PanelSearch'
import { GeneralProvider } from './context/GeneralProvider';
import { LoadingProvider } from './context/LoadingProvider';
function App() {

   
  return (
    <GeneralProvider>
      <LoadingProvider>
      <PanelSearch className="app"></PanelSearch>
      <PanelResult className="app"></PanelResult> 
      </LoadingProvider>
    </GeneralProvider>
  )
}

export default App
