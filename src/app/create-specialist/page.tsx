"use client";

import React, { useState } from "react";
import { Upload, CheckCircle, Check } from "lucide-react";
import {
  Box,
  Card,
  Button,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import img1 from '../../../public/image 4.png'
import img2 from '../../../public/image 3.png'
import img3 from '../../../public/SSM.png'
import img4 from '../../../public/image 1.png'
import img5 from '../../../public/image 6.png'
import Image from "next/image";
import EditServiceDrawer from "../components/Drawer";
export default function CompanyRegistrationPage(){
  const [imagePreview, setImagePreview] = useState<string | null>(null);
 const [drawerOpen, setDrawerOpen] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <Box className="min-h-screen bg-white px-6 py-10">
      <Box className="mx-auto">
        {/* Header */}
        <Box className="flex items-center justify-between mb-2">
          <Typography variant="h5" fontWeight={500} color="#222222" fontSize={28}>
            Register a new company | Private Limited - Sdn Bhd
          </Typography>

          <Box className="flex gap-3">
            <Button
              variant="outlined"
               onClick={() => setDrawerOpen(true)}
              sx={{
                px: 6,
                borderRadius: "5px",
                textTransform: "none",
                borderColor: "#0f172a",
                color: "#FFFFFF",
                fontWeight: 500,
                backgroundColor: '#071331'
              }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              sx={{
                px: 5,
                borderRadius: "5px",
                textTransform: "none",
                backgroundColor: "#002F70",
                fontWeight: 500,
                "&:hover": { backgroundColor: "#0b1220" },
              }}
            >
              Publish
            </Button>
          </Box>
        </Box>
        <Box className="flex flex-col lg:flex-row gap-8">
          <Box className="w-full lg:w-2/3 flex flex-col gap-6">
            <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
              <Box className="flex flex-col lg:flex-row gap-2">
                <label
                  htmlFor="main-image"
                  className="w-full lg:w-1/2 h-[400px] flex items-center justify-center bg-[#F5F5F5] cursor-pointer hover:bg-gray-50"
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="preview"
                      className="w-full h-full object-cover "
                    />
                  ) : (
                    <Box className="text-center px-4">
                      <Upload size={48} className="text-gray-400 mx-auto" />
                      <p className="text-sm mt-2 text-[#888888] font-medium">
                        Upload an image for your service listing in PNG, JPG or JPEG
                      </p>
                      <p className="text-gray-400 text-xs mt-1">Up to 4MB</p>
                    </Box>
                  )}
                  <input
                    id="main-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                <Box className="w-full lg:w-1/2 flex flex-col">
                  <Box className="relative h-[200px]">
              <Image
    src={img1}
    alt="hero"
    width={600}
    style={{ height: "100%", width: "100%" }}   
    className="object-cover h-full"   
  />
                
  </Box>

    <Box className="relative h-[200px]">
      <Image
    src={img2}
    alt="hero"
    width={600}
    style={{ height: "100%", width: "100%" }}   
    className="object-cover  h-full"   
  />
                  
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card className="p-6 " sx={{ boxShadow: 'none', borderRadius: 0 }}>
            <Typography fontWeight={600} mb={1} color="#222222" sx={{ fontSize: "20px"}}>
                Description
              </Typography>
              <Typography fontWeight={500} fontSize={12} className="text-[#888888] ">Describe your service here</Typography>
            </Card>
             <Divider sx={{ boxShadow: 'none' }} />
            <Card className="p-6 shadow-sm" sx={{ boxShadow: 'none', borderRadius: 0 }}>
              <Typography fontWeight={600} mb={1} color="#222222" sx={{ fontSize: "20px"}}>
                Additional Offerings
              </Typography>
              <Typography fontWeight={500} fontSize={12} className="text-[#888888] ">
                Enhance your service by adding additional offerings
              </Typography>
            </Card>
            <Divider sx={{ boxShadow: 'none' }} />
            <Card className="p-6" sx={{ boxShadow: 'none', borderRadius: 0 }}>
              <Typography fontWeight={600} mb={4} color="#222222" sx={{ fontSize: "20px"}}>
                Company Secretary
              </Typography>
                  

   <Box className="flex justify-between">

              <Box className="flex items-start gap-4">
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                  sx={{ width: 60, height: 60 }}
                />

                <Box className="flex-1">
                  <Box className="flex items-center gap-1">
                    <Typography fontWeight={600} color="#222222" fontSize={14}>Grace Lim</Typography>
                    <div className="flex items-center gap-1">
      <span className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
        <Check size={10} className="text-white" />
      </span>
      <span className="text-green-600 font-medium text-[10px]">Verified</span>
    </div>
                  </Box>
                  <Typography fontSize={10} className="text-[#454545] mb-2">Corpsec Services Sdn Bhd</Typography>

                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      px: 3,
                      py: 0.5,
                      mt: 0.5,
                      borderRadius: "5px",
                      backgroundColor: "#071331",
                      "&:hover": { backgroundColor: "#0b1220" },
                      fontSize: 10,
                    }}
                  >
                    View Profile
                  </Button>
                </Box>

            
              </Box>

                  <Box className="text-right">
                  <Typography fontWeight={500}  fontSize={20} color="#222222">
                    Certified Company Secretary
                  </Typography>

                  <Box className="flex gap-2 ">
                    
                  <Image
        src={img3}
        alt="verified"
      
        className="rounded-full"
      />
                  <Image
        src={img4}
        alt="verified"
        className="rounded-full"
      />
                  <Image
        src={img5}
        alt="verified"
  
        className="rounded-full"
      />
        
                  
                  </Box>
                </Box>
   </Box>


            

              <Typography className="text-[#454545] leading-relaxed " sx={{mt: '20px', fontSize:'14px', mb: '50px'}}>
              A company secretarial service founded by Grace, who believes that every company deserves clarity, confidence, and care in their compliance journey. Inspired by the spirit of entrepreneurship, Aida treats every client’s business as if it were her own — attentive to detail, committed to deadlines, and focused on growth. Step into a partnership built on trust, transparency, and professional excellence. Whether you’re just starting out or managing a growing company, Aida is here to make your corporate governance smooth, secure, and stress-free. Your company’s peace of mind starts here
              </Typography>
            </Card>
          </Box>

          {/* Right column (sidebar) - take 1/3 width on large screens */}
          <Box className="w-full lg:w-1/3">
            <Card className="p-6 sticky top-8" sx={{ boxShadow: 'none', borderRadius: 0 }}>
              <Typography fontWeight={600} fontSize={28}>
                Professional Fee
              </Typography>
              <Typography className="text-[#888888]" fontWeight={500} mb={8}>Set a rate for your service</Typography>

              <Box className="text-center mb-6">
                <Typography fontSize={36} fontWeight={500} className="underline">
                  RM 1,800
                </Typography>
              </Box>

              <Box className="flex justify-between text-sm mb-1">
                <span className="text-[#454545] font-semibold">Base price</span>
                <span className="text-[#222222] font-semibold">RM 1,800</span>
              </Box>

              <Box className="flex justify-between text-sm mb-1">
                <span className="text-[#454545] font-semibold">Service processing fee</span>
                <span className="text-[#222222] font-semibold">RM 540</span>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box className="flex justify-between font-semibold mb-2">
                <span className="text-[#454545] font-semibold">Total</span>
                <span className="text-[#222222] font-semibold">RM 2,340</span>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box className="flex justify-between text-sm font-semibold">
                <span className="text-[#454545] font-semibold">Your returns</span>
                <span className="text-[#222222] font-semibold">RM 1,800</span>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
       <EditServiceDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </Box>

  
  );
}
