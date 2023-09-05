import React from 'react';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import { Container, Content } from './styles';
import Footer from '../../components/Footer';
import { useSearch } from '../../context/SearchContext';

interface LayoutProps {
  page: string;
  isError?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ page, isError = false, children }) => {
  const { handleSetVisibiltyModalOptions } = useSearch();
  const history = useHistory();

  return (
    <Content page={page}>
      <Header
        onClickOptions={() => handleSetVisibiltyModalOptions(true)}
        onClickNavigate={() => history.goBack()}
        page={page}
      />
      <Container>{children}</Container>
      <Footer page={page} isError={isError} />
    </Content>
  );
};

export default Layout;
