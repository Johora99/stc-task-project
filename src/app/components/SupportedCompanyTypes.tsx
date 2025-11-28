"use client";
import { Box, Checkbox, Chip, List, ListItem, ListItemButton, ListItemText, Paper, Popover, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import {
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';
interface CompanyType {
  id: string;
  value: string;
  title: string;
  description: string;
}
export default function SupportedCompanyTypes() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Private Limited - Sdn. Bhd', 'Public Limited - Bhd']);
  const toggleType = (value: string): void => {
      if (selectedTypes.includes(value)) {
        setSelectedTypes(selectedTypes.filter(t => t !== value));
      } else {
        setSelectedTypes([...selectedTypes, value]);
      }
    };
    const removeType = (value: string, e: React.MouseEvent): void => {
    e.stopPropagation();
    setSelectedTypes(selectedTypes.filter(t => t !== value));
  };
  const companyTypes: CompanyType[] = [
    {
      id: 'private',
      value: 'Private Limited - Sdn. Bhd',
      title: 'Private Limited - Sdn. Bhd.',
      description: 'Most common choice for businesses in Malaysia. Offers limited liability, easy ownership, and is ideal for startups and SMEs'
    },
    {
      id: 'public',
      value: 'Public Limited - Bhd',
      title: 'Public Limited - Bhd.',
      description: 'Suitable for large businesses planning to raise capital from the public or list on the stock exchange'
    }
  ];
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  
  const getSelectedCompanies = (): CompanyType[] => {
    return companyTypes.filter(ct => selectedTypes.includes(ct.value));
  };
  return (
    <Box sx={{ flex: 1, mb: 3 }}>
  <Typography
    variant="caption"
    sx={{ display: "block", mb: 1, fontWeight: 500 }}
  >
    Supported Company types
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
      {selectedTypes.map((type) => (
        <Chip
          key={type}
          label={type}
          onDelete={(e) => removeType(type, e)}
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

      {/* FIXED ARROW */}
      <KeyboardArrowDownIcon
        sx={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform:
            Boolean(anchorEl)
              ? "translateY(-50%) rotate(180deg)"
              : "translateY(-50%)",
          transition: "0.2s",
          color: "grey.500",
        }}
      />
    </Paper>

    {/* Dropdown */}
    <Popover
      open={Boolean(anchorEl)}
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
          width: isMobile ? "100%" : 400,
          mt: 1,
          maxHeight: 220,
        },
      }}
    >
      <List dense sx={{ p: 0 }}>
        {companyTypes.map((type) => (
          <ListItem key={type.id} disablePadding>
            <ListItemButton
              onClick={() => toggleType(type.value)}
              sx={{
                px: 2,
                py: 1,
                "&:hover": {
                  backgroundColor: "grey.50",
                },
              }}
            >
              <Checkbox
                checked={selectedTypes.includes(type.value)}
                size="small"
              />
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.primary">
                    {type.value}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Popover>
  </Box>

  {/* Description Section */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
    {getSelectedCompanies().map((company, index) => (
      <Box
        key={company.id}
        sx={{
          pb: 2,
          borderBottom:
            index < getSelectedCompanies().length - 1
              ? "1px solid"
              : "none",
          borderColor: "grey.200",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            mb: 1,
            fontSize: "1rem",
          }}
        >
          {company.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
          }}
        >
          {company.description}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>
  )
}
