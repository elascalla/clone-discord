import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>CANAIS DE TEXTO</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="csgo" /> */}
    </Container>
  );
};

export default ChannelList;
