"use client";
import React, { useState } from "react";

import {
  Box,
  Typography,
  Paper,
  Chip,
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";
import BoltIcon from "@mui/icons-material/Bolt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function ServiceOfferings() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const services = [
    {
      id: 1,
      title: "Company Secretary Subscription",
      description: "Enjoy 1 month free Company Secretary Subscription",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      id: 2,
      title: "Opening of a Bank Account",
      description: "Complimentary Corporate Bank Account Opening",
      icon: <AccountBalanceIcon />,
    },
    {
      id: 3,
      title: "Access Company Records and SSM Forms",
      description: "24/7 Secure Access to Statutory Company Records",
      icon: <DescriptionIcon />,
    },
    {
      id: 4,
      title: "Priority Filling",
      description: "Documents are prioritized for submission within 24 hours",
      icon: <BoltIcon />,
    },
    {
      id: 5,
      title: "Registered Office Address Use",
      description: "Use of SSM-Compliant Registered Office Address with Optional Mail Forwarding",
      icon: <LocationOnIcon />,
    },
    {
      id: 6,
      title: "Compliance Calendar Setup",
      description: "Get automated reminders for all statutory deadlines",
      icon: <EventAvailableIcon />,
    },
    {
      id: 7,
      title: "First Share Certificate Issued Free",
      description: "Receive your company's first official share certificate at no cost",
      icon: <EmojiEventsIcon />,
    },
    {
      id: 8,
      title: "CTC Delivery & Courier Handling",
      description: "Certified documents delivered securely to you",
      icon: <LocalShippingIcon />,
    },
    {
      id: 9,
      title: "Chat Support",
      description: "Always-On chat support for compliance and filing",
      icon: <ChatBubbleOutlineIcon />,
    },
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addService = (serviceTitle) => {
    if (!selectedServices.includes(serviceTitle)) {
      setSelectedServices(prev => [...prev, serviceTitle]);
    }
    handleClose();
  };

  const removeService = (serviceTitle, event) => {
    event.stopPropagation();
    setSelectedServices(prev => prev.filter(item => item !== serviceTitle));
  };

  const getSelectedServiceDetails = () => {
    return services.filter(service => selectedServices.includes(service.title));
  };

  return (
    <Box sx={{ flex: 1, mb: 3 }}>
      <Typography
        variant="caption"
        sx={{ display: "block", mb: 1, fontWeight: 500 }}
      >
        Service Offerings
      </Typography>

      {/* Select Field */}
      <Box sx={{ position: "relative", mb: 3 }}>
        <Paper
          variant="outlined"
          onClick={handleOpen}
          sx={{
            position: "relative",
            width: "100%",
            minHeight: 42,
            px: 2,
            py: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            "&:hover": {
              borderColor: "grey.400",
            },
          }}
        >
          {selectedServices.map((service) => (
            <Chip
              key={service}
              label={service}
              onDelete={(e) => removeService(service, e)}
              deleteIcon={<CloseIcon />}
              size="small"
              sx={{
                backgroundColor: "grey.100",
                color: "grey.700",
                border: "1px solid",
                borderColor: "grey.300",
              }}
            />
          ))}

          {selectedServices.length === 0 && (
            <Typography color="text.secondary">Select services...</Typography>
          )}

          {/* FIXED ARROW */}
          <KeyboardArrowDownIcon
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: open
                ? "translateY(-50%) rotate(180deg)"
                : "translateY(-50%)",
              transition: "0.2s",
              color: "grey.500",
            }}
          />
        </Paper>

        {/* Dropdown - No checkboxes, just click to add */}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            sx: {
              width: 520,
              mt: 1,
              maxHeight: 300,
              borderRadius: 2,
            },
          }}
        >
          <List dense sx={{ p: 0 }}>
            {services.map((service) => (
              <ListItem key={service.id} disablePadding>
                <ListItemButton
                  onClick={() => addService(service.title)}
                  sx={{
                    px: 2,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "grey.50",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                    {service.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
                        {service.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                        {service.description}
                      </Typography>
                    }
                    sx={{ ml: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Popover>
      </Box>

      {/* Description Section - Same design as dropdown but with background color */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0, bgcolor: "#F5F5F5", borderRadius: 1 }}>
        {getSelectedServiceDetails().map((service, index) => (
          <Box
            key={service.id}
            sx={{
              px: 2,
              py: 1.5,
              borderBottom:
                index < getSelectedServiceDetails().length - 1
                  ? "1px solid"
                  : "none",
              borderColor: "grey.200",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "grey.50",
              },
            }}
          >
            <Box sx={{ minWidth: 40, color: "#222222"}}>
              {service.icon}
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#181818" }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#888888"}}>
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}