"use client";
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  Button,
  Stack,
  InputAdornment,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { X, Upload } from "lucide-react";
import {
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';
import AdditionalOfferings from "./ServiceOfferings";
import ServiceImageUpload from "./ServiceImages";

interface CompanyType {
  id: string;
  value: string;
  title: string;
  description: string;
}
export default function EditServiceDrawer({ open, setOpen }) {
    const [price, setPrice] = useState("0.00");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    estimatedDays: "1",
    price: "1800",
    companyType: "Private Limited - Sdn Bhd",
    serviceCategory: "",
    offerings: [
      { id: 1, name: "Company Secretary Subscription", checked: false },
      { id: 2, name: "Opening of Bank Account", checked: false },
      { id: 3, name: "GST Return", checked: false },
    ],
    images: [null, null, null],
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleOffering = (id) => {
    setFormData(prev => ({
      ...prev,
      offerings: prev.offerings.map(o => 
        o.id === id ? { ...o, checked: !o.checked } : o
      )
    }));
  };

  const handleImageUpload = (index, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...formData.images];
      newImages[index] = reader.result;
      setFormData(prev => ({ ...prev, images: newImages }));
    };
    reader.readAsDataURL(file);
  };


  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimal point with max 2 decimals
    if (value === "" || /^\d*\.?\d{0,2}$/.test(value)) {
      setPrice(value);
    }
  };

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
    const [selectedTypes, setSelectedTypes] = useState<string[]>(['Private Limited - Sdn. Bhd', 'Public Limited - Bhd']);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

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

  const getSelectedCompanies = (): CompanyType[] => {
    return companyTypes.filter(ct => selectedTypes.includes(ct.value));
  };



  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 600, p: 4, height: "100%", overflowY: "auto" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6">Edit Service</Typography>
          <IconButton onClick={() => setOpen(false)}><X /></IconButton>
        </Box>

        {/* Title */}
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

        {/* Description */}
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


        {/* Price and Estimated Completion */}
      
        
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
{/* Supported Company Types */}
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



        {/* Service Category */}
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

        {/* Additional Offerings */}
       <AdditionalOfferings />

        {/* Service Images */}
        <ServiceImageUpload />
        <Divider sx={{ my: 3 }} />

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" fullWidth onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" fullWidth sx={{ backgroundColor: "#071331", "&:hover": { backgroundColor: "#0a1a3a" } }}>Save</Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
