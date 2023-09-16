import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToCourseCart}) => {

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
                    handleAddToCourseCart={handleAddToCourseCart}
                    ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToCourseCart: PropTypes.func
}
export default Courses;