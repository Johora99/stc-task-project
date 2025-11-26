import React from 'react'
import {
  Box,
  IconButton,
  Avatar,
  Typography,
} from '@mui/material';
import {
  MoreVert,
  HelpOutline,
  Settings,                  
  ReceiptLong, 
} from '@mui/icons-material';
import { Bell, CirclePlus, ClipboardList, Download, Mail, Pencil, PenLine, Tag, Trash2, Users } from 'lucide-react';

export default function DashboardNavbar() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          px: 4,
          py: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '20px 10px',
          boxShadow: '0 1px 1px 0 #0000001A',
          borderRadius: 1,
        }}
      >
        <Box></Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton>
            <Mail size={20} color='#454545' />
          </IconButton>
          <IconButton>
            <Bell size={20} color='#454545' />
          </IconButton>
          <Avatar sx={{ width: 40, height: 40, bgcolor: '#d1d5db' }} />
        </Box>
      </Box>

      <Box sx={{ margin: '0px 10px', paddingBottom: '10px' }}>
        <Typography variant="caption" color="#454545" fontWeight={500}>
          Dashboard
        </Typography>
        <Typography variant="h5" fontWeight={700} color='#252525'>
          Services
        </Typography>
      </Box>
    </>
  );
}
