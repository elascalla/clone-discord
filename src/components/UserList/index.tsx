import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickName}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Disponível - 1 </Role>
      <UserRow nickName="Erick Lascalla" />

      <Role> Offline - 15 </Role>
      <UserRow nickName="Davison André Oliveira" isBot />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
      <UserRow nickName="Fulano de tal" />
    </Container>
  );
};

export default UserList;
