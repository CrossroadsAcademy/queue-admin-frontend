import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test from './Test/Test';
import { Suspense } from 'react';
import CssSpinner from './Test/CssSpinner/CssSpinner';

function App() {
  return (
     <Suspense fallback={<CssSpinner />}>
       <Test />
     </Suspense>
  );
}



export default App;
