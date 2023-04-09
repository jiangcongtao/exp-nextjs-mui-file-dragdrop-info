import React from 'react';
import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';

const styles = {
  container: {
    padding: 2,
  },
};

export default function FileInfo({ file }) {
  return (
    <Box sx={styles.container}>
      <Typography variant="h5">File Information:</Typography>
      <Typography>Name: {file.name}</Typography>
      <Typography>Size: {file.size} bytes</Typography>
      <Typography>
        Last Modified: {format(file.lastModified, 'PPpp')}
      </Typography>
      {/* Add any other file information you'd like to display here */}
    </Box>
  );
}
