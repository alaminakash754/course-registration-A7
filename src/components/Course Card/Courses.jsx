import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);   

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 w-2/3 gap-3'>
            
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    ></Course>)
            }
        </div>
    );
};

export default Courses;