import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

export default function ServiceCategory({formData,handleInputChange }) {
  return (
    <Box sx={{ mb: 3 }}>
          <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
            Service Category
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              value={formData.serviceCategory}
              onChange={(e) => handleInputChange("serviceCategory", e.target.value)}
            >
              <MenuItem value="Incorporation of a new company">Incorporation of a new company</MenuItem>
              <MenuItem value="Monthly Company Secretary subscription">Monthly Company Secretary subscription</MenuItem>
              <MenuItem value="Appointment of Secretary">Appointment of Secretary</MenuItem>
            </Select>
          </FormControl>
        </Box>

    
  )
}
