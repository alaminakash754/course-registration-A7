import PropTypes from 'prop-types';
const Course = ({course}) => {
    const {programming_course_title, course_image} = course
    return (
        <div>
            <img className='w-64 h-36' src={course_image} alt={`course picture of the title ${course_image}`}  />
            <h2>{programming_course_title}</h2>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;