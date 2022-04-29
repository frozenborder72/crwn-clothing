import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
