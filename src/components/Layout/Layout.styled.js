const { default: styled } = require('styled-components');

export const Header = styled.header`
  background-color: #eff1f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  background-color: #eff1f0;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
  padding-left: 16px;
  padding-right: 16px;
`;
