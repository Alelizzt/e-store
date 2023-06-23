const BASE_URL = "http://localhost:3000";
export const fetcher = async (url) => {
    const response = await fetch(BASE_URL + url);
    const responseData = await response.json();
    return responseData;
};
