import { Dispatch } from 'react';
import { ModalType } from '../components/modal/modal';

export interface AppState {
  displayedModal: ModalType | null;
}

export enum AppStateActionType {
  showCreateReportModal = 'showCreateReportModal',
  dismissModal = 'dismissModal'
}

export type AppStateAction =
  | { type: AppStateActionType.showCreateReportModal }
  | { type: AppStateActionType.dismissModal };

export type AppStateActionDispatch = Dispatch<AppStateAction>;


export const appStateReducer = (state: AppState, action: AppStateAction): AppState => {
  switch (action.type) {
    case AppStateActionType.showCreateReportModal:
      return { displayedModal: ModalType.createReport };
    case AppStateActionType.dismissModal:
      return { displayedModal: null };
    default:
      throw new Error();
  }
};
