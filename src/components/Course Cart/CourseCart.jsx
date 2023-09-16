import PropTypes from 'prop-types';
import EachCourseCart from '../eachCourseCart/EachCourseCart';

const CourseCart = ({selectCourse, creditHour, remainingCredit}) => {
    return (
        <div className=" rounded-lg w-1/4 ">
            <div className='border-b-2'>
                <h3>Credit Hour Remaining {remainingCredit} hr</h3>
            </div>
            <h2 className="text-xl font-bold">Course Name</h2>
            {
                selectCourse.map(eachCourse => <EachCourseCart key={eachCourse.id} eachCourseCart={eachCourse}></EachCourseCart>)
            }
            <div className='border-t-2 p-2'>
                <h3>Total Credit Hour: {creditHour}</h3>
            </div>
        </div>
    );
};

CourseCart.propTypes = {
    selectCourse: PropTypes.array,
    creditHour: PropTypes.number,
    remainingCredit: PropTypes.number
}

export default CourseCart;