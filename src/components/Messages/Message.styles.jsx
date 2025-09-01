import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
  width: 100%;
`;

export const MessageContent = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: ${({ isUser }) => isUser ? 'flex-end' : 'flex-start'};
`;

export const MessageUser = styled.div`
  font-weight: 600;
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 0.25rem;
`;

export const MessageText = styled.div`
  padding: 0.75rem 1rem;
  border-radius: ${({ isUser }) => 
    isUser ? '18px 18px 0 18px' : '18px 18px 18px 0'};
  background: ${({ isUser }) => isUser ? '#667eea' : '#ffffff'};
  color: ${({ isUser }) => isUser ? 'white' : '#333'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  word-break: break-word;
  line-height: 1.4;
`;

export const MessageTime = styled.div`
  font-size: 0.7rem;
  color: #999;
  margin-top: 0.25rem;
  padding: 0 0.5rem;
`;

export const AdminMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  
  ${MessageText} {
    background: #f0f0f0;
    color: #666;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;