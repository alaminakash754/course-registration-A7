import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs'; 
import { FiDollarSign } from 'react-icons/fi';


const Course = ({course, handleAddToCourseCart}) => {
    const {programming_course_title, course_image,course_description,course_price,course_credit} = course
    return (
        <div className='h-96 rounded-lg'>
            <img className='w-full h-36 mb-2 rounded-lg' src={course_image} alt={`course picture of the title ${course_image}`}  />
            <h2 className='text-lg font-bold mb-2'>{programming_course_title}</h2>
            <p className='text-sm font-normal mb-2'>{course_description}</p>
            <div className='flex mb-2 justify-between'>
                <div>
                    <button><FiDollarSign></FiDollarSign></button>    
                           
                    <span className='lg:ml-3 sm:m-0'>Price: {course_price}</span>
                </div>

                <div className='justify-center items-center'>
                    <button className='lg:mr-3 sm:m-0'><BsBook></BsBook></button>
                    <span>Credit: {course_credit}hr</span>
                </div>
            </div>
            <button onClick={()=> handleAddToCourseCart(course,course_credit)} className='bg-sky-500 text-white rounded-lg w-full p-2 mb-2'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCourseCart: PropTypes.func
}

export default Course;