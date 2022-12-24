import React from 'react';
import Modal from '../../shared/components/modal/modal';
import TextInput from '../../shared/components/text-input/text-input';
import styles from './create-report-modal.module.css';
import Checkbox, { CheckboxType } from '../../shared/components/checkbox/checkbox';
import { useAppDispatch } from '../../shared/state/app-state-context-provider';
import { AppStateActionType } from '../../shared/state/app-state';
import SelectionInput from '../../shared/components/selection-input/selection-input';

const CreateReportModal = () => {
  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch({ type: AppStateActionType.showCreateReportSuccessToast });
  };

  return (
    <Modal title="Create Report" onSave={onSave}>
      <div className={styles.contentContainer}>
        <h3>Details</h3>
        <SelectionInput label="Type" value="Executive Summary"/>
        <SelectionInput label="Company" value="Company Name"/>
        <TextInput label="Name" placeholder="Placeholder" required/>

        <div className={styles.spacer}/>

        <h3>Settings</h3>
        <Checkbox label="Export now" type={CheckboxType.radio}/>
        <Checkbox label="Scheduled" type={CheckboxType.radio} pressed/>

        <SelectionInput label="Recurrence" value="Weekly" className={styles.settingsInput}/>
        <SelectionInput label="On" value="Monday" className={styles.settingsInput}/>
        <SelectionInput label="Reporting interval" value="Last 7 days" className={styles.reportingInterval}/>

        <div className={styles.attachFilesContainer}>
          <label>Attach files</label>
          <div className={styles.attachFilesSelection}>
            <Checkbox label="Dashboard PDF" pressed/>
            <Checkbox label="Details as CSV" pressed/>
            <Checkbox label="Archive files" pressed/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateReportModal;
