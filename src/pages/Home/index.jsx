/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from "components/hooks/useGifs"
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'


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
      <header className="o-header">
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}
