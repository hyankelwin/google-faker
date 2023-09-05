import React from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';
import {
  Container,
  Image,
  Caption,
  Title,
  Description,
  ContentIconClose,
  GoogleImage,
} from './styles';
import LogoGoogle from '../../assets/images/logo-google.png';
import { Animal } from '../../api/google-faker-api/search/interfaces/animal.interface';

interface ModalSearchProps {
  data: Animal;
  isOpen: boolean;
  onCloseModal: () => void;
}

const ModalSearch: React.FC<ModalSearchProps> = ({
  data,
  isOpen,
  onCloseModal,
}) => {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false}>
      <ContentIconClose>
        <GoogleImage src={LogoGoogle} alt="Image of google search" />
        <IoClose
          data-testid="icon-close-modal"
          onClick={() => onCloseModal()}
          size={20}
        />
      </ContentIconClose>
      <Container>
        <Image src={data.image} />
        <Caption>{data.site}</Caption>
        <Title>{data.name}</Title>
        <Description>{data.description}</Description>
      </Container>
    </Modal>
  );
};

export default ModalSearch;
