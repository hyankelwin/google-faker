import React from 'react';
import { IoApps } from 'react-icons/io5';
import { SlOptionsVertical } from 'react-icons/sl';
import {
  Content,
  Image,
  GoogleImage,
  Title,
  ContentIconOptionsMobile,
  ContentIconOptionsWeb,
} from './styles';
import LogoGoogle from '../../assets/images/logo-google.png';
import FormSearch from '../../containers/Form/FormSearch';
import UserImage from '../../assets/images/user.png';

interface HeaderProps {
  page: string;
  onClickOptions: () => void;
  onClickNavigate: () => void;
}

const Header: React.FC<HeaderProps> = ({
  page,
  onClickOptions,
  onClickNavigate,
}) => {
  return (
    <Content page={page}>
      <div>
        {page === 'home' && <Title>Agile Content Frontend test</Title>}
        {page === 'search' && (
          <div>
            <GoogleImage
              data-testid="google-image"
              src={LogoGoogle}
              onClick={() => onClickNavigate()}
              alt="Image of google search"
            />
            <FormSearch page={page} showButton={false} isMedium />
          </div>
        )}
      </div>
      <div>
        {page === 'search' && (
          <ContentIconOptionsMobile page={page}>
            <SlOptionsVertical
              data-testid="options-icon"
              onClick={() => onClickOptions()}
              size={20}
            />
          </ContentIconOptionsMobile>
        )}
        <ContentIconOptionsWeb page={page}>
          <IoApps size={20} />
          <Image src={UserImage} alt="Image to simulate user logged" />
        </ContentIconOptionsWeb>
      </div>
    </Content>
  );
};

export default Header;
