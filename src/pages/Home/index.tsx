import React from 'react';
import { Content, ImageGoogle } from './styles';
import Layout from '../../containers/Layout';
import GoogleImg from '../../assets/images/logo-google.png';
import FormSearch from '../../containers/Form/FormSearch';
import ModalOptions from '../../components/Modals/ModalOptions';
import { useSearch } from '../../context/SearchContext';

const Home: React.FC = () => {
  const { handleSetVisibiltyModalOptions, visibilityModalOptions } =
    useSearch();

  return (
    <Layout page="home">
      <ModalOptions
        isOpen={visibilityModalOptions}
        onCloseModal={() => handleSetVisibiltyModalOptions(false)}
      />
      <Content>
        <ImageGoogle src={GoogleImg} />
        <FormSearch page="home" />
      </Content>
    </Layout>
  );
};

export default Home;
