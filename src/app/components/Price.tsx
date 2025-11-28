"use client";
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Price() {
    const [price, setPrice] = useState("0.00");
    const MalaysianFlag = () => (
    <svg width="24" height="16" viewBox="0 0 24 16" style={{ borderRadius: '2px' }}>
      <rect width="24" height="16" fill="#CC0001"/>
      <rect width="24" height="1.14" fill="#fff"/>
      <rect width="24" height="1.14" y="2.28" fill="#fff"/>
      <rect width="24" height="1.14" y="4.56" fill="#fff"/>
      <rect width="24" height="1.14" y="6.84" fill="#fff"/>
      <rect width="24" height="1.14" y="9.12" fill="#fff"/>
      <rect width="24" height="1.14" y="11.4" fill="#fff"/>
      <rect width="24" height="1.14" y="13.68" fill="#fff"/>
      <rect width="12" height="8" fill="#010066"/>
      <path d="M6.5 2.5 C6.5 1.5 7 1 7.5 1 C8 1 8.5 1.5 8.5 2.5 C8.5 3 8.2 3.4 7.8 3.6 C8.5 3.8 9 4.4 9 5.2 C9 6.2 8.2 7 7.2 7 C6.2 7 5.5 6.2 5.5 5.2 C5.5 4.4 6 3.8 6.7 3.6 C6.3 3.4 6 3 6 2.5 Z" fill="#FFCC00"/>
      <path d="M9.5 3.5 L10 4 L10.5 3.5 L10.3 4.2 L11 4.5 L10.3 4.8 L10.5 5.5 L10 5 L9.5 5.5 L9.7 4.8 L9 4.5 L9.7 4.2 Z" fill="#FFCC00"/>
    </svg>
  );
    const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <Box sx={{ flex: 1, mb: 3 }}>
      <Typography 
      variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}
      >
        Price
      </Typography>
      
      <TextField
        type="text"
        value={price}
        onChange={handlePriceChange}
        placeholder="0.00"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MalaysianFlag />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.primary',
                    
                  }}
                >
                  MYR
                </Typography>
              </Box>
            </InputAdornment>
          ),
          
        }}
      />
    </Box>
  )
}
