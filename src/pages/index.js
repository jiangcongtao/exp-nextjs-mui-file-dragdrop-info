import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Container,
  Typography,
} from '@mui/material';
import TabPanel from '../components/TabPanel';
import FileDropzone from '../components/FileDropzone';
import FileInfo from '../components/FileInfo';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    setTabIndex(1);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '1rem',
        marginTop: '5rem'
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        My File Info App
      </Typography>
      <Box sx={{ flexGrow: 1, width: '100%', marginTop: '2rem' }}>
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Choose File" />
            <Tab label="File Info" />
          </Tabs>
        </AppBar>
        <Box sx={{ marginTop: '3rem' }}> {/* Add this Box component to create the gap */}
          <TabPanel value={tabIndex} index={0}>
            <FileDropzone onFileSelected={handleFileSelected} />
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            {selectedFile && <FileInfo file={selectedFile} />}
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}
