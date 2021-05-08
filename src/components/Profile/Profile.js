import React from "react";

import { H4 } from "../../styles/headers";
import { Container, Column } from "../../styles/grid";
import { ParagraphTitle, ParagraphValue } from "../../styles/text";

const Profile = ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <>
      <H4>Profile</H4>
      <Container>
        <Column size={2}>
          <img src={profile.avatarImage} alt="avatar" width="150vh" />
        </Column>
        <Column size={1}>
          <ParagraphTitle>First name</ParagraphTitle>
          <ParagraphTitle>Last name</ParagraphTitle>
          <ParagraphTitle>Phone</ParagraphTitle>
          <ParagraphTitle>Email</ParagraphTitle>
          <ParagraphTitle>Bio</ParagraphTitle>
        </Column>
        <Column size={3}>
          <ParagraphValue className="col-6">{profile.firstName}</ParagraphValue>
          <ParagraphValue className="col-6">{profile.lastName}</ParagraphValue>
          <ParagraphValue className="col-6">{profile.phone}</ParagraphValue>
          <ParagraphValue className="col-6">{profile.email}</ParagraphValue>
          <ParagraphValue className="col-6">{profile.bio}</ParagraphValue>
        </Column>
      </Container>
    </>
  );
};

export default Profile;
