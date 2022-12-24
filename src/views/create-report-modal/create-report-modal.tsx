import React from 'react';
import Modal from '../../shared/components/modal/modal';

const CreateReportModal = () => {
  const onSave = () => {
    console.log('Show save snackbar');
  };

  return (
    <Modal title="Create Report" onSave={onSave}>
      <p>contentttt</p>
    </Modal>
  );
};

export default CreateReportModal;
