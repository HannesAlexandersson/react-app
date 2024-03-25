import PropTypes from 'prop-types';
import styled from '@emotion/styled'

function ListItem(props){
    const { emoji, name, isFavourite, nutritions } = props;

    const Card = styled.div`    
    background-color: ${props.color};
    padding: 12px;
    border-radius: 4px;
    color: black;
    font-size: 18px;
    position: relative;
    &:hover {
      color: white;
    }
  `
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;   
    gap: 8px;
    font-size: 12px;
  `
  const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
    gap: 4px;
    font-size: 12px;
  `

  const Nut = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  list-style: none;
  gap: 10px;
  `
    return(
        <Card>
            <Row className="row">
                <Title>
                    <p>{props.emoji}</p>
                    <h1>{props.name}</h1>
                </Title>
                <p>{props.isFavourite ? '⭐️' : ''}</p>
            </Row>
            <Row className="row">
                <Nut>
                    <li>Calories: {nutritions.calories}</li>
                    <li>Fat: {nutritions.fat}</li>
                    <li>Sugar: {nutritions.sugar}</li>
                    <li>Carbohydrates: {nutritions.carbohydrates}</li>
                    <li>Protein: {nutritions.protein}</li>
                </Nut>
            </Row>
        </Card>
    );
}
ListItem.propTypes = {
    emoji: PropTypes.string,
    name: PropTypes.string,
    isFavourite: PropTypes.bool,
    color: PropTypes.string,
    nutritions: PropTypes.object,
};
/* {nutritions.map((nutrient) => (
                    <li key={nutrient}>{nutrient}</li>                   
                    ))}; */
export default ListItem