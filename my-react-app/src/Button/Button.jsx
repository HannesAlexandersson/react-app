import styles from './Button.module.css'

function Button(){
    //Using inline: 
    /* const style = {
        background_color: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        border_radius: "5px",
        border: "none",
        cursor: "pointer",
    } */


    return(
        <button className={styles.Button}>Click me</button>
    );
}

export default Button