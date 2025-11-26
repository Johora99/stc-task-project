import React from 'react'
import {
  Box,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import {
  MoreVert,
  HelpOutline,
  Settings,                  
  ReceiptLong, 
} from '@mui/icons-material';
import { Bell, CirclePlus, ClipboardList, Download, Mail, Pencil, PenLine, Tag, Trash2, Users } from 'lucide-react';
export default function DashboardSideBar() {
  const menuItems = [
    { icon: <Tag  width={20} height={20} />, label: "Specialists", active: true },
    { icon: <Users  width={20} height={20}/>, label: "Clients", active: false },
    { icon: <ClipboardList width={20} height={20}/>, label: "Service Orders", active: false },
    { icon: <PenLine width={20} height={20} />, label: "eSignature", active: false },
    { icon: <Mail width={20} height={20} />, label: "Messages", active: false },
  {
    icon: <ReceiptLong fontSize="small" sx={{ width: 20, height: 20 }} />,
    label: "Invoices & Receipts"
  }
  ];
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: 256,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 256,
            boxSizing: 'border-box',
            borderRight: '1px solid #e5e7eb',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ width: 40, height: 40, bgcolor: '#d1d5db' }} />
          <Box sx={{ lineHeight: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
         <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "14px", lineHeight: 1 , color: "#454545"}}>
          Gwen Lam
       </Typography>

       <Typography variant="caption"  sx={{ fontSize: "9px", lineHeight: 1 , color: "#002F70"}}>
        ST Comp Holdings Sdn Bhd
        </Typography>
       </Box>
        </Box>
        </Box>

        <Box sx={{ px: 2 }}>
          <Typography
            variant="caption"
            fontWeight={600}
            color="#888888"
            sx={{ px: 1.5, mb: 1, display: 'block' }}
          >
            Dashboard
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    bgcolor: item.active ? '#002F70' : 'transparent',
                    color: item.active ? 'white' : '#484848',
                    fontSize: "9px",
                    fontWeight: "500",
                    '&:hover': {
                    bgcolor: item.active ? '#1e3a8a' : '#f3f4f6',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 30 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ position: 'absolute', bottom: 0, width: 256, p: 2 }}>
          <List>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton sx={{ borderRadius: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <HelpOutline fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Help"
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ borderRadius: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary="Settings"
                  primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
  )
}
