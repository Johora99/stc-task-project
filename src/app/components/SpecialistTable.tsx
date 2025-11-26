"use client";

import React, { useState } from 'react'
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Box,
  Button,
  TextField,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tabs,
  Tab,
  Pagination,
  Divider,
} from '@mui/material';
import {
  MoreVert, 
} from '@mui/icons-material';
import { CirclePlus, Download, Pencil, Trash2} from 'lucide-react';
import Link from 'next/link';
interface Service {
  id: number;
  name: string;
  price: string;
  purchases: number;
  duration: string;
  approvalStatus: 'Approved' | 'Under Review' | 'Rejected';
  publishStatus: 'Published' | 'Not Published';
}
export default function SpecialistTable() {
  const [activeTab, setActiveTab] = useState(0);
    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

    const services: Service[] = [
    { id: 1, name: 'Incorporation of a new company', price: 'RM 2,000', purchases: 20, duration: '3 Days', approvalStatus: 'Approved', publishStatus: 'Published' },
    { id: 2, name: 'Incorporation of a new company', price: 'RM 2,000', purchases: 0, duration: '1 Day', approvalStatus: 'Under Review', publishStatus: 'Published' },
    { id: 3, name: 'Incorporation of a new company', price: 'RM 2,000', purchases: 431, duration: '14 Days', approvalStatus: 'Approved', publishStatus: 'Published' },
    { id: 4, name: 'Incorporation of a new company', price: 'RM 2,000', purchases: 0, duration: '7 Days', approvalStatus: 'Under Review', publishStatus: 'Published' },
    { id: 5, name: 'Incorporation of a new company', price: 'RM 2,000', purchases: 1283, duration: '4 Days', approvalStatus: 'Rejected', publishStatus: 'Not Published' },
    { id: 6, name: 'Incorporation of a new company', price: 'RM 2,000', purchases: 9180, duration: '5 Days', approvalStatus: 'Rejected', publishStatus: 'Not Published' },
  ];
    const toggleService = (id: number) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(serviceId => serviceId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedServices(prev =>
      prev.length === services.length ? [] : services.map(s => s.id)
    );
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setActiveMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenuId(null);
  };
    const getApprovalChipProps = (status: string) => {
    switch (status) {
      case 'Approved':
        return { sx: { bgcolor: '#18C96466', color: '#1AC623', borderRadius: '5px',  px: 1.5,
          py: 2, width: '100px'} };
      case 'Under Review':
        return { sx: { bgcolor: '#61E7DA66', color: '#00AC95' ,borderRadius: '5px',
          py: 2, width: '100px'} };
      case 'Rejected':
        return { sx: { bgcolor: '#C0030666', color: '#C00306', borderRadius: '5px',  px: 1.5,
          py: 2,  width: '100px'} };
      default:
        return { sx: { bgcolor: '#f3f4f6', color: '#6b7280', borderRadius: '5px',  px: 1.5,
          py: 2,  } };
    }
  };

  const getPublishChipProps = (status: string) => {
    switch (status) {
      case 'Published':
        return { sx: { bgcolor: '#18C964', color: '#FFFFFF', borderRadius: '5px',  px: 1.5,
          py: 2,  width: '100px'} };
      case 'Not Published':
        return { sx: { bgcolor: '#C00306', color: '#FFFFFF', borderRadius: '5px',
          py: 2,  width: '100px'} };
      default:
        return { sx: { bgcolor: '#6b7280', color: 'white', borderRadius: '5px',  px: 1.5,
          py: 2,  } };
    }
  };
  return (


<Box sx={{ flexGrow: 1, overflow: 'auto', p: 4 , bgcolor: '#fff'}}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom fontFamily="Red Hat Display" color='#000000'>
              Specialists
            </Typography>
            <Typography variant="body2" color="#888888" fontWeight={500}>
              Create and publish your services for Client's & Companies
            </Typography>
          </Box>

          {/* Tabs */}
        <Tabs
  value={activeTab}
  onChange={(e, newValue) => setActiveTab(newValue)}
  sx={{
    mb: 3,
    borderBottom: '1px solid #D2D2DA',
    '& .MuiTab-root': {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: 14,
      color: '#222222', 
    },
    '& .Mui-selected': {
      color: '#002F70', 
      fontWeight: '500'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#1E3A8A',
    },
  }}
>
  <Tab label="All" />
  <Tab label="Drafts" />
  <Tab label="Published" />
    </Tabs>
    {/* Search and Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <TextField
  placeholder="Search Services"
  size="small"
  sx={{ width: 256, bgcolor: '#F1F1F1' }}
  variant="outlined"
  InputProps={{
    sx: {
      bgcolor: '#F1F1F1',
      color: '#888888',
      '& fieldset': {
        border: 'none',      
      },
      '&:hover fieldset': {
        border: 'none',      
      },
      '&.Mui-focused fieldset': {
        border: 'none',      
      },
    },
  }}
/>
      <Box sx={{ display: 'flex', gap: 1.5 }}>
      <Link href="/create-specialist" passHref>
  <Button
    variant="contained"
    startIcon={<CirclePlus width={20} height={20} />}
    sx={{
      bgcolor: '#002F70',
      textTransform: 'none',
      '&:hover': { bgcolor: '#1e40af' },
    }}
  >
    Create
  </Button>
</Link>
              <Button
                variant="outlined"
                startIcon={<Download width={20} hanging={20}/>}
                sx={{ textTransform: 'none', color: '#fff', bgcolor: '#071331', borderColor: '#d1d5db' }}
              >
                Export
              </Button>
            </Box>
          </Box>

          {/* Table */}
         
  <TableContainer component={Paper} sx={{
            width: '100%',
            boxShadow: 'none',
            borderRadius: 0, 
             }}>
            <Table sx={{ width: '100%' }}>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f9fafb' }}>
                  <TableCell padding="checkbox">
                  <Checkbox
                      checked={selectedServices.length === services.length}
                      onChange={toggleAll}
                      sx={{
                        color: '#D1D5DB',
                        '&.Mui-checked': {
                          color: '#002F70',
                        },
                        '& .MuiSvgIcon-root': {
                          fontSize: 20,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    SERVICE
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    PRICE
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    PURCHASES
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    DURATION
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    APPROVAL STATUS
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    PUBLISH STATUS
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, fontSize: 12, color: '#888888' }}>
                    ACTION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <TableRow
                    key={service.id}
                    hover
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedServices.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                        sx={{
                          color: '#D1D5DB',
                          '&.Mui-checked': {
                            color: '#002F70',
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 20,
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{color: '#454545', fontWeight: "600"}}>{service.name}</TableCell>
                    <TableCell sx={{color: '#454545', fontWeight: "600"}}>{service.price}</TableCell>
                    <TableCell sx={{color: '#454545', fontWeight: "600"}}>{service.purchases}</TableCell>
                    <TableCell sx={{color: '#454545', fontWeight: "600"}}>{service.duration}</TableCell>
                    <TableCell sx={{borderRadius: '2px'}}>
                      <Chip
                        label={service.approvalStatus}
                        size="small"
                        {...getApprovalChipProps(service.approvalStatus)}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={service.publishStatus}
                        size="small"
                        {...getPublishChipProps(service.publishStatus)}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuOpen(e, service.id)}
                      >
                        <MoreVert />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Menu */}
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right', 
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right', 
  }}
  PaperProps={{
    sx: { 
      width: 350,          
      bgcolor: 'white',    
      boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
      py: 2,
    },
  }}
>
  <MenuItem onClick={handleMenuClose}>
    <ListItemIcon>
      <Pencil fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      sx={{ color: '#454545', fontWeight: 700, ml: 1 }}
    >
      Edit
    </ListItemText>
  </MenuItem>

  <Divider sx={{ mx: 2, bgcolor: '#E5E7EB' }} />

  <MenuItem onClick={handleMenuClose}>
    <ListItemIcon>
      <Trash2 fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      sx={{ color: '#454545', fontWeight: 700, ml: 1 }}
    >
      Delete
    </ListItemText>
  </MenuItem>
</Menu>


          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              count={10}
              page={1}
              shape="rounded"
              sx={{
                '& .MuiPaginationItem-root': {
                  '&.Mui-selected': {
                    bgcolor: '#1e3a8a',
                    color: 'white',
                  },
                },
              }}
            />
          </Box>
        </Box>










    
  )
}
