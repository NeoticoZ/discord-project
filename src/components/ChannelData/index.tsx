import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return(
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="NeoticoZ"
            date="04/09/2021"
            content="Fala aí, Musk!"
          />
        ))}

        <ChannelMessage 
          author="Elon Musk"
          date="04/09/2021"
          content={
            <>
              <Mention>NeoticoZ</Mention> estou em Marte, me carrega no Lol por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre" />
          <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;