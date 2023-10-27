import { FaStar } from 'react-icons/fa';
import {Container} from "../Section/styles"
import { Tag } from '../Tag';

export function Section({title, rating}) {
  const filledStars = rating;

  return(
    <Container>
      <h2>{title}</h2>
      <div>
        {Array.from({length: 5}, (_,index) => (
          <span key={index}>
            {index < filledStars ? <FaStar /> : <FaStar style = {{opacity:0.05}}/>}
          </span>
        ))}
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minima officiis odit odio corrupti, earum illum adipisci, laboriosam, ducimus magnam quasi quis maiores doloribus animi dolore libero. Culpa, natus dolorum?</p>
      <Tag title="horror"/>
      <Tag title="drama"/>
    </Container>
  )
};