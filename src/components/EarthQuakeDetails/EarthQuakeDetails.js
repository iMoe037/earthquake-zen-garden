import React from "react";
import dayjs from "dayjs";
import { Redirect } from "react-router";

import { Container, Column } from "../../styles/grid";
import { H4 } from "../../styles/headers";
import { ParagraphTitle, ParagraphValue } from "../../styles/text";

import { Routes } from "../../constants";

const EarthQuakeDetails = ({ location }) => {
  if (
    !location ||
    !location.state ||
    !location.state.earthQuakeDetails ||
    !location.state.earthQuakeDetails.properties
  ) {
    return <Redirect to={Routes.HOME} />;
  }

  const { properties: earthQuake } = location.state.earthQuakeDetails;

  const { title, mag, time, status, tsunami, type } = earthQuake;

  return (
    <>
      <H4>{title}</H4>
      <Container>
        <Column size={1}>
          <ParagraphTitle>Title</ParagraphTitle>
          <ParagraphTitle>Magnitude</ParagraphTitle>
          <ParagraphTitle>Time</ParagraphTitle>
          <ParagraphTitle>Status</ParagraphTitle>
          <ParagraphTitle>Tsunami</ParagraphTitle>
          <ParagraphTitle>Type</ParagraphTitle>
        </Column>
        <Column size={3}>
          <ParagraphValue>{title}</ParagraphValue>
          <ParagraphValue>{mag}</ParagraphValue>
          <ParagraphValue>
            {dayjs(time).format("MMM DD, YYYY, HH:MM A")}
          </ParagraphValue>
          <ParagraphValue>{status}</ParagraphValue>
          <ParagraphValue>{tsunami}</ParagraphValue>
          <ParagraphValue>{type}</ParagraphValue>
        </Column>
      </Container>
    </>
  );
};

export default EarthQuakeDetails;
