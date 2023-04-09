import React, { useState, useCallback } from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
  container: (isDragActive) => ({
    border: '2px dashed #000',
    borderRadius: 4,
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    height: '400px',
    backgroundColor: isDragActive ? '#f0f0f0' : 'transparent', // Change the background color when a file is dragged over the box
  }),
};

export default function FileDropzone({ onFileSelected }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const handleFileInput = (e) => {
    onFileSelected(e.target.files[0]);
  };

  const openFileDialog = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.addEventListener('change', handleFileInput);
    fileInput.click();
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      const file = e.dataTransfer.files[0];
      onFileSelected(file);
    },
    [onFileSelected],
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  return (
    <Box
      sx={styles.container(isDragActive)}
      onClick={openFileDialog}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <Typography variant="h6">
        Drop files here or Click here to choose a file
      </Typography>
    </Box>
  );
}
