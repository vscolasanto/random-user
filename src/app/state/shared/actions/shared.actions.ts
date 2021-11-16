import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Shared State] Set Loading',
  props<{ status: boolean}>()
)