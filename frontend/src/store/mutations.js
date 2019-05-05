import {MUTYPE} from './types/mutation_type';

export const mutations = {
  [MUTYPE.SET_MOVIE](state , payload){
    state.movies = payload;
  },
  [MUTYPE.SET_TVSHOW](state , payload){
    state.tvshow = payload;
  },
  [MUTYPE.IS_LOADING](state , payload){
    state.isLoading = payload;
  }
};