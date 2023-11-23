import { FaStar } from 'react-icons/fa';
import {Container} from "../Section/styles"
import { Tag } from '../Tag';

export function Section({title, rating, description, tagTitle }) {
  const filledStars = rating;

  if (!title && !rating && !description && !tagTitle) {
    return null; // Nao renderiza se nao tiver conteudo
  }

  return (
    <Container>
      {title && <h2>{title}</h2>}
      {rating && (
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              {index < filledStars ? <FaStar /> : <FaStar style={{ opacity: 0.05 }} />}
            </span>
          ))}
        </div>
      )}
      {description && <p>{description}</p>}
      {tagTitle && <Tag title={tagTitle} />}
    </Container>
  );
};