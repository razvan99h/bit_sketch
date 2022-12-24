import React from 'react';
import Modal from '../../shared/components/modal/modal';
import TextInput from '../../shared/components/text-input/text-input';
import styles from './create-report-modal.module.css';

const CreateReportModal = () => {
  const onSave = () => {
    console.log('Show save snackbar');
  };

  return (
    <Modal title="Create Report" onSave={onSave}>
      <div className={styles.contentContainer}>
        <TextInput />
        <TextInput placeholder="Placeholder" />
        <TextInput value="Name" label="Label" required/>
        <TextInput value="Name" label="Label" readOnly />
        <TextInput value="Name" label="Label" disabled />
        <TextInput />
        <TextInput placeholder="Placeholder" />
        <TextInput value="Name" label="Label" />
        <TextInput value="Name" label="Label" readOnly />
        <TextInput value="Name" label="Label" disabled />
        <TextInput />
        <TextInput placeholder="Placeholder" />
        <TextInput value="Name" label="Label" />
        <TextInput value="Name" label="Label" readOnly />
        <TextInput value="Name" label="Label" disabled />
      </div>
    </Modal>
  );
};

export default CreateReportModal;
