import React from 'react';
import { Animal } from '../../api/google-faker-api/search/interfaces/animal.interface';
import { Content, Caption, Title, Description } from './styles';

interface ListItemProps {
  data: Animal[];
  onClickItem: (item: Animal) => void;
}

const ListItem: React.FC<ListItemProps> = ({ data, onClickItem }) => {
  return (
    <>
      {data.map(item => (
        <Content key={item.id}>
          <Caption>{item.site}</Caption>
          <Title data-testid="title-list" onClick={() => onClickItem(item)}>
            {item.name}
          </Title>
          <Description>{item.description}</Description>
        </Content>
      ))}
    </>
  );
};

export default ListItem;
