import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f8f9fa;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

export const RoomInfo = styled.div`
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
  
  div {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.25rem;
  }
`;

export const UserBadge = styled.div`
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  overflow-y: auto;
  background: #f0f2f5;
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const ChatForm = styled.form`
  display: flex;
  padding: 1rem 2rem;
  background: #ffffff;
  border-top: 1px solid #e9ecef;
  gap: 1rem;
`;