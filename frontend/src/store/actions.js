import {MUTYPE} from './types/mutation_type';
import {BASE_URL , MOVIES , TVSHOW} from './url';
import axios from 'axios';

const A = axios.create({baseURL: String(BASE_URL)});

export const actions = {
  getMovies({commit}){
    A.get(MOVIES).then((res) =>{
      console.log("\n⚠️ ALL_CONTENT (res): " , res.data);
      commit(MUTYPE.SET_MOVIE , res.data);
      commit(MUTYPE.IS_LOADING , false);
    }).catch((err) =>{
      console.error(err);
    });
  }
};