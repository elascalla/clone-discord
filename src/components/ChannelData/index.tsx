import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage from "../ChannelMessage";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Erick Lascalla"
          date="28/07/2020"
          content="Testando as mensagens"
        />

        {/* <ChannelMessage
          author="Davison Oliveira"
          date="28/07/2020"
          content={
            <>
              <Mention>@Erick Lascalla</Mention>, testando o funcionamento da
              mention.
            </>
          }
          hasMention
          isBot
        /> */}
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
