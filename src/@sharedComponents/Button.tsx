import styled from "styled-components";

type buttonType = {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

export const Button = ({ children, type, onClick }: buttonType) => {
  return (
    <BottomButton type={type} onClick={onClick}>
      {children}
    </BottomButton>
  );
};

const BottomButton = styled.button`
  display: flex;
  width: 100%;
  height: 7.6rem;
  min-height: 6rem;
  cursor: pointer;
  border: none;
  background: #9ba9f0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    background-color: skyblue;
  }
`;