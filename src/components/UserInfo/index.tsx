import React from 'react';

import { 
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon } from './styles';

const ServerName: React.FC = () => {
  return(
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>NeoticoZ</strong>
          <span>#8546</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  );
};

export default ServerName;