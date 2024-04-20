import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";


export interface Platform{
  id:number;
  slug:string;
  name:string;
}

export interface Game{
  id:number;
  name:string;
  background_image:string;
  platforms:{platform:Platform}[];
  metacritic:number;
}

interface FetchGamesResponse {
    count:number;
    results:Game[];
}

const useGames = ()=>useData<Game>('games')

export default useGames