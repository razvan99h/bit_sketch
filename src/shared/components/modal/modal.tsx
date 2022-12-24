import React, { FunctionComponent } from 'react';
import styles from './modal.module.css';
import { useAppDispatch } from '../../state/app-state-context-provider';
import { AppStateActionType } from '../../state/app-state';
import Button from '../button/button';
import { ReactComponent as CancelIcon } from '../../../assets/images/cancel-icon.svg';
import IconButton from '../icon-button/icon-button';

export enum ModalType {
  createReport = 'createReport',
}

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  hideCornerDismiss?: boolean;
  saveButtonText?: string;
  cancelButtonText?: string;
  onSave?: () => void;
  onCancel?: () => void;
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const dispatch = useAppDispatch();

  const dismissModal = () => {
    dispatch({ type: AppStateActionType.dismissModal });
  };

  const onSave = () => {
    props.onSave?.();
  };

  const onCancel = () => {
    dismissModal();
    props.onCancel?.();
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>
        {props.title}
        <IconButton action={onCancel}>
          <CancelIcon className={styles.cancelIcon}/>
        </IconButton>
      </h2>
      <div className={styles.contentContainer}>
        {props.children}
      </div>
      <div className={styles.actionsContainer}>
        {props.onSave && <Button text={props.saveButtonText!} action={onSave}/>}
        <Button text={props.cancelButtonText!} action={onCancel} hollow/>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  title: '',
  hideCornerDismiss: false,
  saveButtonText: 'Save',
  cancelButtonText: 'Cancel',
};

export default Modal;
