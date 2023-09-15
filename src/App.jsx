import './App.css'
import Courses from './components/Course Card/Courses'
import CourseCart from './components/Course Cart/Coursecart'

import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <main className='flex justify-between my-3'>
        <Courses></Courses>
       <CourseCart></CourseCart>
      </main>
      
      
    </>
  )
}

export default App
