import React from 'react';
import { IoApps, IoClose } from 'react-icons/io5';
import Modal from 'react-modal';
import {
  Image,
  ContentOptions,
  Content,
  ContentIconClose,
  Column,
  GoogleImage,
} from './styles';
import UserImage from '../../../assets/images/user.png';
import LogoGoogle from '../../../assets/images/logo-google.png';

interface ModalOptionsProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

const ModalOptions: React.FC<ModalOptionsProps> = ({
  isOpen,
  onCloseModal,
}) => {
  return (
    <Modal isOpen={isOpen} ariaHideApp={false}>
      <Content>
        <ContentIconClose>
          <GoogleImage src={LogoGoogle} alt="Image of google search" />
          <IoClose
            data-testid="icon-close-modal"
            onClick={() => onCloseModal()}
            size={20}
          />
        </ContentIconClose>

        <ContentOptions>
          <Column>
            <p>Aplications</p>
            <IoApps size={20} />
          </Column>
          <Column>
            <p>Profile</p>
            <Image src={UserImage} alt="Image to simulate user logged" />
          </Column>
        </ContentOptions>
      </Content>
    </Modal>
  );
};

export default ModalOptions;
