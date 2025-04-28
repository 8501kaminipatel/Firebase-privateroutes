
import './App.css'
import Allroutes from './Component/Allroutes';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar'

import { UserProvider } from './CONTEXT/AuthContext';



function App() {

  return (
    <>
      <UserProvider>
        <Navbar />
        <Allroutes/>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App;




