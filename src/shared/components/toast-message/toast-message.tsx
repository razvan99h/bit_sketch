import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './toast-message.module.css';
import { ReactComponent as SuccessIcon } from '../../../assets/images/toast/success.svg';
import { ReactComponent as CloseIcon } from '../../../assets/images/cancel-icon.svg';
import IconButton from '../icon-button/icon-button';
import { useAppDispatch } from '../../state/app-state-context-provider';
import { AppStateActionType } from '../../state/app-state';

export enum ToastType {
  success = 'success',
  error = 'error',
  warning = 'warning',
  info = 'info',
}

interface ToastMessageProps {
  message: string;
  type?: ToastType | null;
  onDismiss?: () => void;
}

const ToastMessage: FunctionComponent<ToastMessageProps> = (props: ToastMessageProps) => {
  const [hide, setHide] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0);
  const dispatch = useAppDispatch();

  const onDismiss = () => {
    props.onDismiss?.();
    setOpacity(0);
    setTimeout(() => {
      setHide(true);
      dispatch({ type: AppStateActionType.dismissToast });
    }, 1000);
  };

  const getFirstIcon = () => {
    switch (props.type) {
      case ToastType.success:
        return <SuccessIcon className={styles.firstIcon}/>;
      default:
        return null;
    }
  };

  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
    setTimeout(() => setOpacity(0), 3100); // hide automatically after 3 seconds
    setTimeout(() => {
      setHide(true);
      dispatch({ type: AppStateActionType.dismissToast });
    }, 4000); // remove from DOM
  }, []);

  return (
    hide
      ? null
      : <div className={`${styles.mainContainer} ${styles[props.type!]}`} style={{ opacity }}>
        {getFirstIcon()}
        <span>{props.message}</span>
        <div className={styles.divider}/>
        <IconButton action={onDismiss}>
          <CloseIcon className={styles.closeIcon}/>
        </IconButton>
      </div>
  );
};

ToastMessage.defaultProps = {
  type: ToastType.info,
};

export default ToastMessage;
