import PropTypes from 'prop-types';
const EachCourseCart = ({eachCourseCart}) => {
    const {programming_course_title} = eachCourseCart;


    return (
        <div className='bg-slate-200 rounded-lg m-4 p-4'>
            <ol type="1">
                <li>{programming_course_title}</li>
            </ol>
            
        </div>
    );
};
EachCourseCart.propTypes ={
    eachCourseCart: PropTypes.object
}
export default EachCourseCart;