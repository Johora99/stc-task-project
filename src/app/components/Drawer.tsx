"use client";
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { X } from "lucide-react";
import AdditionalOfferings from "./ServiceOfferings";
import ServiceImageUpload from "./ServiceImages";
import Description from "./Description";
import Title from "./Title";
import Estimated from "./Estimated";
import Price from "./Price";
import SupportedCompanyTypes from "./SupportedCompanyTypes";
import ServiceCategory from "./ServiceCategory";


export default function EditServiceDrawer({ open, setOpen }) {
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


  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box sx={{ width: 600, p: 4, height: "100%", overflowY: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6">Edit Service</Typography>
          <IconButton onClick={() => setOpen(false)}><X /></IconButton>
        </Box>
      <Title formData= {formData} handleInputChange={handleInputChange}/>
      <Description formData={formData} handleInputChange={handleInputChange}/>
     <Estimated formData={formData} handleInputChange={handleInputChange}/>
      <Price />
    <SupportedCompanyTypes />
    <ServiceCategory formData={formData} handleInputChange={handleInputChange}/>
       <AdditionalOfferings />
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
