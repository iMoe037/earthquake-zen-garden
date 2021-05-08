import { Directions, SortByTypes } from "./constants";

export const initialEarthQuakeSortState = {
  sortByType: null,
  placeDirection: Directions.DESCENDING,
  magnitudeDirection: Directions.DESCENDING,
  timeDirection: Directions.DESCENDING,
};

// Different actions tied to a reducer that affects how the earth quake data is sorted.
export const EarthQuakeSortActions = {
  SET_PLACE_SORT_TYPE: "SET_PLACE_SORT_TYPE",
  SET_MAGNITUDE_SORT_TYPE: "SET_MAGNITUDE_SORT_TYPE",
  SET_TIME_SORT_TYPE: "SET_TIME_SORT_TYPE",
};

// A reducer to handle the sort type and sort direction for earth quake data
export const earthQuakeSortStateReducer = (state, action) => {
  switch (action.type) {
    case EarthQuakeSortActions.SET_PLACE_SORT_TYPE:
      return {
        sortByType: SortByTypes.PLACE,
        placeDirection:
          state.placeDirection === Directions.DESCENDING
            ? Directions.ASCENDING
            : Directions.DESCENDING,
      };
    case EarthQuakeSortActions.SET_MAGNITUDE_SORT_TYPE:
      return {
        sortByType: SortByTypes.MAGNITUDE,
        magnitudeDirection:
          state.magnitudeDirection === Directions.DESCENDING
            ? Directions.ASCENDING
            : Directions.DESCENDING,
      };
    case EarthQuakeSortActions.SET_TIME_SORT_TYPE:
      return {
        sortByType: SortByTypes.TIME,
        timeDirection:
          state.timeDirection === Directions.DESCENDING
            ? Directions.ASCENDING
            : Directions.DESCENDING,
      };
    default:
      throw new Error("Unknown action passed to reducer");
  }
};
