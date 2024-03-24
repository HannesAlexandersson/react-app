import PropTypes from 'prop-types';

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
export default Box