import { MainPage } from './pages/main-page';
import { CurrentTimeContext } from './data/time-context';
import { useCurrentTime } from './data/use-current-time';
import './App.css'

function App() {
  /**
   * Note
   * Although this hook could also be used within Main page directly eliminating the need for context
   * you could argue that keeping the current time consistent across the whole App has value
   * so the hook is thought so that it could be used stand alone or propagated through context
   */
  const currentTime = useCurrentTime();

  return (
    <div className="App" >
      <CurrentTimeContext.Provider value={currentTime}>
        <MainPage />
      </CurrentTimeContext.Provider> 
    </div>
  )
}

export default App
