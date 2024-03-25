import PropTypes from 'prop-types';
//Uppgift 2
/*
function Box({className, style, ...props}) {

    const fontStyles = {
        fontFamily: 'italic',
    };
    const styles = {
        ...fontStyles,
        ...style,
    }
    
    const classes = className + ' ' + 'box';   
    
    const text = props.children;
    return(
        <div className={classes} style={styles}>
            {text}
        </div>
    );
}

Box.propTypes = {
    style: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};

*/

function Box({size, style, ...props}){

    const fontStyles = {
        fontFamily: 'italic',
    };
    const styles = {
        ...fontStyles,
        ...style,
    }
   const sizes = 'box--' + size;
    
    const classes = sizes + ' ' + 'box';   
    
    const text = props.children;

    return(
        <div className={classes} style={styles}>
            {text}
        </div>

    );
}

Box.propTypes = {
    style: PropTypes.object.isRequired,
    size: PropTypes.string,
    children: PropTypes.node,
};
export default Box