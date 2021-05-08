import React, { useState, useEffect, useReducer } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import {
  EarthQuakeSortActions,
  earthQuakeSortStateReducer,
  initialEarthQuakeSortState,
} from "./state";

import { Container, Column } from "../../styles/grid";
import { H4 } from "../../styles/headers";

import { getEarthQuakes } from "../../services/earthquake/earthquake";

import { Directions, SortByTypes } from "./constants";
import { Routes } from "../../constants";

const Main = () => {
  const [earthQuakes, setEarthQuakes] = useState([]);

  useEffect(() => {
    const fetchedEarthQuakes = getEarthQuakes();
    setEarthQuakes(fetchedEarthQuakes);
  }, []);

  const [earthQuakeSort, earthQuakeSortDispatch] = useReducer(
    earthQuakeSortStateReducer,
    initialEarthQuakeSortState
  );

  const renderEarthQuakeInfo = () => {
    if (!earthQuakes.features) {
      return null;
    }

    const earthQuakeData = [...earthQuakes.features];

    switch (earthQuakeSort.sortByType) {
      case SortByTypes.PLACE: {
        const compareFunction =
          earthQuakeSort.placeDirection === Directions.ASCENDING
            ? (a, b) => {
                let [aKM] = a.properties.place.split(" ");
                let [bKM] = b.properties.place.split(" ");

                aKM.replace("km", "");
                bKM.replace("km", "");

                return Number.parseInt(aKM, 10) - Number.parseInt(bKM, 10);
              }
            : (a, b) => {
                let [aKM] = a.properties.place.split(" ");
                let [bKM] = b.properties.place.split(" ");

                aKM.replace("km", "");
                bKM.replace("km", "");

                return Number.parseInt(bKM, 10) - Number.parseInt(aKM, 10);
              };
        earthQuakeData.sort(compareFunction);
        break;
      }
      case SortByTypes.MAGNITUDE: {
        const compareFunction =
          earthQuakeSort.magnitudeDirection === Directions.ASCENDING
            ? (a, b) => a.properties.mag - b.properties.mag
            : (a, b) => b.properties.mag - a.properties.mag;
        earthQuakeData.sort(compareFunction);
        break;
      }
      case SortByTypes.TIME: {
        const compareFunction =
          earthQuakeSort.timeDirection === Directions.ASCENDING
            ? (a, b) => a.properties.time - b.properties.time
            : (a, b) => b.properties.time - a.properties.time;
        earthQuakeData.sort(compareFunction);
        break;
      }
      default:
        console.debug("No sort type passed ignoring sort");
    }

    return earthQuakeData.map((earthQuake) => {
      const { place, mag, time } = earthQuake.properties;

      return (
        <Container key={earthQuake.id}>
          <Column size={3}>
            <Link
              to={{
                pathname: Routes.EARTH_QUAKE_DETAILS,
                state: { earthQuakeDetails: earthQuake },
              }}
            >
              {place}
            </Link>
          </Column>
          <Column size={1}>{mag}</Column>
          <Column size={2}>
            {dayjs(time).format("MMM DD, YYYY, HH:MM A")}
          </Column>
        </Container>
      );
    });
  };

  return (
    <>
      <H4>USGS All EarthQuakes, Past Hour</H4>
      <Container>
        <Column
          size={3}
          onClick={() =>
            earthQuakeSortDispatch({
              type: EarthQuakeSortActions.SET_PLACE_SORT_TYPE,
            })
          }
        >
          Title
        </Column>
        <Column
          size={1}
          onClick={() =>
            earthQuakeSortDispatch({
              type: EarthQuakeSortActions.SET_MAGNITUDE_SORT_TYPE,
            })
          }
        >
          Magnitude
        </Column>
        <Column
          size={2}
          onClick={() =>
            earthQuakeSortDispatch({
              type: EarthQuakeSortActions.SET_TIME_SORT_TYPE,
            })
          }
        >
          Time
        </Column>
      </Container>
      {renderEarthQuakeInfo()}
    </>
  );
};

export default Main;
