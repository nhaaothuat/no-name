import { Route, Routes } from "react-router"
import OTPPage from "./pages/OTPPage"
import Letter1 from "./pages/Letter1"


export function App() {
  return (
   <>
   <Routes>
  <Route index element={<OTPPage />} />
  <Route path="letter" element={<Letter1 />} />

  {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
</Routes>

   </>
  )
}

export default App
