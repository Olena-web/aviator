import { createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';
import { TRIP_TYPE } from '../../constants/localStorage';
import { IAgeTypeQuantity } from '../../models/agetype-quantity.model';

export interface SearchFormState {
  tripType: string;
  departure: string;
  codDeparture: string;
  destination: string;
  codDestination: string;
  startDate: string;
  endDate: string;
  passengers: IAgeTypeQuantity[];
  isPaid?: boolean;
}

export const initialState: SearchFormState = {
  tripType: localStorage.getItem(TRIP_TYPE) || 'round-trip',
  departure: '',
  destination: '',
  codDeparture: '',
  codDestination: '',
  startDate: '',
  endDate: '',
  passengers: [],
  isPaid: false,
};

export const searchReducer = createReducer(
  initialState,
  on(
    SearchActions.setSearchForm,
    (state, payload): SearchFormState => ({
      ...state,
      ...payload,
    })
  ),
  on(SearchActions.clearSearchState, () => ({ ...initialState }))
);
