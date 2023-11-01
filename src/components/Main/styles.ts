import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spacings.xlarge};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
