import { createFeatureSelector, createSelector } from '@ngrx/store'

export const SHARED_STATE_NAME = 'shared';

export interface SharedState {
  showLoading: boolean
}

export const initialState: SharedState = {
  showLoading: false
}

const getSharedFeatureState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(
  getSharedFeatureState,
  state => state.showLoading
)