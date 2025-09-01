import React from 'react';
import { 
  MessageContainer,
  MessageContent,
  MessageUser,
  MessageText,
  MessageTime,
  AdminMessage
} from './Message.styles';
import { format } from 'date-fns';

const Message = ({ message, currentUser }) => {
  const isUser = currentUser === message.user;
  const isAdmin = message.user === 'admin';

  if (isAdmin) {
    return (
      <AdminMessage>
        <MessageText>{message.text}</MessageText>
      </AdminMessage>
    );
  }

  return (
    <MessageContainer isUser={isUser}>
      <MessageContent isUser={isUser}>
        {!isUser && <MessageUser>{message.user}</MessageUser>}
        <MessageText isUser={isUser}>{message.text}</MessageText>
        <MessageTime>
          {format(new Date(), 'h:mm a')}
        </MessageTime>
      </MessageContent>
    </MessageContainer>
  );
};

export default Message;