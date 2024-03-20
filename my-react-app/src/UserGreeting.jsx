import PropType from 'prop-types'

function UserGreeting(props){
    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.userName}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    /* if(props.isLoggedIn){
        return(
            <h2>Welcome {props.userName}</h2>
        )
    }

    return(
        <h2>Please log in to continue</h2>
    ) */
    
    return(
        props.isLoggedIn ? welcomeMsg : loginPrompt
    );
}
UserGreeting.propTypes = {
    isLoggedIn: PropType.bool,
    userName: PropType.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}
export default UserGreeting