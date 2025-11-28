import { Box, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

export default function Estimated({formData, handleInputChange}) {
  return (
    <Box sx={{ flex: 1, mb: 3 }}>
  <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
    Estimated Completion Time (Days)
  </Typography>
  <Select
    fullWidth
    size="small"
    value={formData.estimatedDays}
    onChange={(e) => handleInputChange("estimatedDays", e.target.value)}
  >
    {Array.from({ length: 14 }, (_, i) => (
      <MenuItem key={i + 1} value={i + 1}>
        {i + 1} {i + 1 === 1 ? "day" : "days"}
      </MenuItem>
    ))}
  </Select>
  </Box>
  )
}
