import { Dispatch } from 'react';
import { ModalType } from '../components/modal/modal';
import { ToastType } from '../components/toast-message/toast-message';

export interface AppState {
  displayedModal: ModalType | null;
  toastMessage: string | null;
  toastType: ToastType | null;
}

export enum AppStateActionType {
  showCreateReportModal = 'showCreateReportModal',
  dismissModal = 'dismissModal',
  showCreateReportSuccessToast = 'showCreateReportSuccessToast',
  dismissToast = 'dismissToast',
}

export type AppStateAction =
  | { type: AppStateActionType.showCreateReportModal }
  | { type: AppStateActionType.dismissModal }
  | { type: AppStateActionType.showCreateReportSuccessToast }
  | { type: AppStateActionType.dismissToast };

export type AppStateActionDispatch = Dispatch<AppStateAction>;


export const appStateReducer = (state: AppState, action: AppStateAction): AppState => {
  switch (action.type) {
    case AppStateActionType.showCreateReportModal:
      return { ...state, displayedModal: ModalType.createReport };
    case AppStateActionType.dismissModal:
      return { ...state, displayedModal: null };
    case AppStateActionType.showCreateReportSuccessToast:
      console.log('hei', state);
      return { ...state, toastMessage: 'Successfully saved the report', toastType: ToastType.success };
    case AppStateActionType.dismissToast:
      return { ...state, toastMessage: null, toastType: null };
    default:
      throw new Error();
  }
};
