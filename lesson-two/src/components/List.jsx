import PropTypes from 'prop-types';
import styled from '@emotion/styled'

/*Inside your List component, render a ListItem component for each fruit, */
function List({children}) {
    const List = styled.ul`
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        `;
   
    return (
        <List>
           {children}
        </List>
    );
}

List.propTypes = {
    children: PropTypes.object,    
};
export default List