import { useState } from 'react'
import './App.css'
import Courses from './components/Course Card/Courses'
import CourseCart from './components/Course Cart/Coursecart'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectCourse, setSelectCourse] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingCredit,setRemainingCredit ] = useState(20);


  const handleAddToCourseCart = (course) => {
   
    const isExist = selectCourse.find((courseItem) => courseItem.id == course.id);

      let count = course.course_credit;

      if(isExist){
        return toast.error('You all ready selected this course , please select another course')
      }else{
        selectCourse.forEach((courseItem) => {
          count = count + courseItem.course_credit
          
        })
        
        const totalRemainingCredit = 20 - count;
        if(count > 20){
            return toast.error('you can not buy more than 20 hours credit')
        }else{
          
          setRemainingCredit(totalRemainingCredit)
          setCreditHour(count);
          const newSelectCourse = [...selectCourse, course];
          setSelectCourse(newSelectCourse);
          
        }
        
      }
      
  }
  
  return (
    <>
      
      <Header></Header>
      <main className='md:flex gap-4 max-w-7xl mx-auto mt-4'>
        <Courses handleAddToCourseCart={handleAddToCourseCart}></Courses>
        <CourseCart
          selectCourse={selectCourse} 
          creditHour={creditHour} 
          remainingCredit={remainingCredit}
        ></CourseCart>
      </main>
      <ToastContainer />
      
    </>
  )
}

export default App
