import React from 'react';

export const fetchAllPokemon = () => {
  return $.ajax({
    url: "/api/pokemon",
    method: "GET",
    dataType: "json"
  });
};

export const fetchPoke = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`,
    method: "GET",
    dataType: "json"
  });
};
