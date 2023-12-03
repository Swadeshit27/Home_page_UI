import { Route, Routes } from 'react-router-dom';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import ParticularBlogPage from './Pages/ParticularBlogPage';



export default function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<ParticularBlogPage />} />
      </Routes>
    </>

  )
}