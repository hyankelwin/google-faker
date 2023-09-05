import styled from 'styled-components';

interface LayoutProps {
  page: string;
}

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div<LayoutProps>`
  overflow: ${props => (props.page === 'home' ? 'hidden' : 'auto')};
  height: 100vh;
`;
