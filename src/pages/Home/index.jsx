/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGifs } from "components/hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import ListOfGifs from "components/ListOfGifs";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      //navegar hacia otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
