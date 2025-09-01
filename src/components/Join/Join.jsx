import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  JoinContainer, 
  JoinForm, 
  Title, 
  Subtitle,
  InputContainer,
  ButtonContainer 
} from './Join.styles';
import { PrimaryButton } from '../UI/Button/Button';
import { TextInput } from '../UI/Input/Input';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !room) return;
    navigate(`/chat?name=${name}&room=${room}`);
  };

  return (
    <JoinContainer>
      <Title>Welcome to ChatitNow</Title>
      <Subtitle>Join a room to start chatting</Subtitle>
      
      <JoinForm onSubmit={handleSubmit} >
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </InputContainer>
        
        <InputContainer>
          <TextInput
            type="text"
            placeholder="Room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            required
            
          />
        </InputContainer>
        
        <ButtonContainer>
          <PrimaryButton type="submit">
            Join Chat
          </PrimaryButton>
        </ButtonContainer>
      </JoinForm>
    </JoinContainer>
  );
};

export default Join;