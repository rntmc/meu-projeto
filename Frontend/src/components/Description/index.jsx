import { FaStar } from 'react-icons/fa';
import { RxClock } from 'react-icons/rx';
import {Container} from "../Description/styles"

export function Description({title, rating}) {
  const filledStars = rating;

  return(
    <Container>
      <section>
        <h2>{title}</h2>
          {Array.from({length: 5}, (_,index) => (
            <span key={index}>
              {index < filledStars ? <FaStar /> : <FaStar style = {{ opacity:0.05}}/>}
            </span>
          ))}
      </section>

      <div>
        <img
          src="https://github.com/rntmc.png"
          alt="foto do usuario"
        />

        <span>Por Renato Carrino</span>
        <RxClock style={{color:'#FF859B'}}/>
        <p>26/10/2023 às 16:00</p>
      </div>
    </Container>
  )
};