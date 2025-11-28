import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Title({formData, handleInputChange}) {
  return (
      <Box sx={{ mb: 3 }}>
              <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
                Title
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Your service title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </Box>
    
  )
}
