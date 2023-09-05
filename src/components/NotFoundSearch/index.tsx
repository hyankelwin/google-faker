import React from 'react';
import AnimalsConstant from '../../constants/animals.constant';
import { Container } from './styles';

interface NotFoundSearchProps {
  value: string;
}

const NotFoundSearch: React.FC<NotFoundSearchProps> = ({ value }) => {
  const handleRenderAnimals = () => {
    return (
      <>
        {AnimalsConstant.map(item => (
          <span key={item}>{item}, </span>
        ))}
      </>
    );
  };

  return (
    <Container>
      {value && (
        <p>
          No results found for <b>{`'${value}'.`}</b>
        </p>
      )}
      <p>Try looking for: {handleRenderAnimals()}</p>
    </Container>
  );
};

export default NotFoundSearch;
