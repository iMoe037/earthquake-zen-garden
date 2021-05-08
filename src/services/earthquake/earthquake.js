import earthQuakeData from "./earthquake-data.json";

// Realistically would be async and would be making a network call
export const getEarthQuakes = () => earthQuakeData;
