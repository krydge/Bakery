
import { useEffect, useState } from 'react'
import { CartProvider } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Success from './Pages/Success';
import Store from './Pages/Store';
import Cancel from './Pages/Cancel';
import NavBar from './Components/NavBar';



function App() {
  const [websiteData, setWebsiteData] = useState({})
  function makeGetRequest(path) {
    axios.get(path).then(
      (response) => {
        var result = response.data;
        setWebsiteData(result)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  useEffect(() => {
    makeGetRequest("http://localhost:4000")
  }, [])
  return (
    <CartProvider>
      <Container>
        <NavBar websiteData={websiteData}></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Store menu={websiteData.Menu}></Store>}></Route>
            <Route path="/success" element={<Success></Success>}></Route>
            <Route path="/cancel" element={<Cancel></Cancel>}></Route>
            {/* <Route path="/requests" element={<RequestsForm></RequestsForm>}></Route> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
