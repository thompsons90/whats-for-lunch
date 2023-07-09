import React, { useEffect, useState } from "react";
import { URL } from "../utils/constants";

const ApiDataComponent: React.FC = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiLoading, setApiLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiLoading(true);
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setApiData(data);
        setApiError(null);
      } catch (error: unknown) {
        setApiError((error as Error).message);
        setApiData(null);
      } finally {
        setApiLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log(apiData);
  return (
    <div>
      {/* {apiLoading ? (
        <p>Loading...</p>
      ) : apiError ? (
        <p>Error: {apiError}</p>
      ) : apiData ? (
        <ul>
          {apiData.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : null} */}
      <h1>API</h1>
      {/* {apiData.map((data: any) => (
        <p>{data.results[0]}</p>
      ))} */}
    </div>
  );
};

export default ApiDataComponent;
