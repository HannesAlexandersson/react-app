import PropTypes from 'prop-types'

function Student(props){
   
    if(props.isStudent){
        return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
        );
    }
    return(
        <p>No student!</p>
    );  
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student