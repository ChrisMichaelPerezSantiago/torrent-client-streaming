import {MUTYPE} from './types/mutation_type';
import {BASE_URL , MOVIES , TVSHOW} from './url';
import axios from 'axios';

const A = axios.create({baseURL: String(BASE_URL)});
const pagin = require('../js/paginator');

export const actions = {
  getMovies({commit} , page){
    A.get(MOVIES).then((res) =>{
      console.log("\n⚠️ MOVIES (res): " , res.data);
      const pagination = pagin.paginator(res.data , page , 10);
      commit(MUTYPE.SET_MOVIE , pagination);
      commit(MUTYPE.IS_LOADING , false);
    }).catch((err) =>{
      console.error(err);
    });
  },
  getTvShow({commit} , page){
    A.get(TVSHOW).then((res) =>{
      console.log("\n⚠️ TVSHOW (res): " , res.data);
      const pagination = pagin.paginator(res.data , page , 10);
      commit(MUTYPE.SET_TVSHOW , pagination);
      commit(MUTYPE.IS_LOADING , false);
    }).catch((err) =>{
      console.log(err);
    });
  }
};