import styled from "styled-components";

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background: linear-gradient(135deg, #80ed99 0%, #00296b 100%);
`;

export const JoinForm = styled.form`
  background: white;
  padding : 3rem;
  border-radius: 12px;
  padding-right: 5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
`;
