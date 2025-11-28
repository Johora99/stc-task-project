import { Box, TextareaAutosize, Typography } from '@mui/material';
import React from 'react'

export default function Description({formData, handleInputChange}) {
  return (
   <Box sx={{ mb: 3 }}>
  <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
    Description
  </Typography>
  <TextareaAutosize
    minRows={4}
    placeholder="Your service description"
    value={formData.description}
    onChange={(e) => {
      const words = e.target.value.split(/\s+/); 
      if (words.length <= 500) {
        handleInputChange("description", e.target.value);
      } else {
        handleInputChange("description", words.slice(0, 500).join(" "));
      }
    }}
    style={{
      width: "100%",
      padding: 8,
      fontSize: 14,
      borderRadius: 4,
      border: "1px solid #ccc",
      outline: "none",
      resize: "none",
      boxSizing: "border-box",
      backgroundColor: "#fff",
    }}
  />
  <Typography variant="caption" sx={{ display: "block", mt: 1, textAlign: "right" }}>
    {formData.description.split(/\s+/).length} / 500 words
  </Typography>
       </Box>

  )
}
