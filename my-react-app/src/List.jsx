import PropTypes from 'prop-types'


function List(props){
    const category = props.category; // assign the props value of category to a local variable
    const items = props.items; //assign the props value of items to a local variable
    
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alfabtiskt
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // omvänd alfabetisk
    //fruits.sort((a,b) => a.calories - b.calories); //numerisk

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = items.map(item => <li key={item.id}>{item.name}: &nbsp;{item.calories}</li>); //map the array with a local loop
    
    return(
        <>
            <h3 className="list-category">{ category }</h3>
            <ul className="list-items">
                    {listItems}
            </ul>
        </>
    );
}
List.propTypes = {
category: PropTypes.string,
items: PropTypes.array,
}

List.defaultProps = {
category: "Category",
items: [],
}
export default List