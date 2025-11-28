"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/CloudUploadOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

interface UploadedFile {
  file: File;
  preview: string;
}

export default function ServiceImageUpload() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/") && file.size <= 4 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile({ file, preview: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  };

  const removeFile = () => setUploadedFile(null);

  return (
    <Box sx={{ mb: 4 }}>
      {/* Label */}
      <Typography variant="caption" sx={{ display: "block", mb: 1, fontWeight: 500 }}>
        Service - Image (1st)
        <Typography component="span" variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
          Maximum of 1 image
        </Typography>
      </Typography>

      {/* Upload Area - Only when no file */}
      {!uploadedFile && (
        <>
          <Box
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            sx={{
              border: "2px dashed #c4c4c4",
              borderRadius: 2,
              bgcolor: "#fafafa",
              height: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "border 0.2s",
              "&:hover": { borderColor: "#999" },
            }}
          >
            <UploadIcon sx={{ fontSize: 48, color: "#002F70", mb: 2 }} />

            <Button
              variant="contained"
              component="label"
              sx={{
                mb: 1,
                textTransform: "none",
                bgcolor: "#002F70",
                "&:hover": { bgcolor: "#303f9f" },
              }}
            >
              Browse
              <input
                type="file"
                hidden
                accept="image/jpeg,image/png,image/webp"
                onChange={handleInputChange}
              />
            </Button>

            <Typography variant="body2" color="#888888">
              or
            </Typography>
            <Typography variant="body2" color="#888888" sx={{ mt: 0.5 }}>
              Drag a file to upload
            </Typography>
          </Box>

          {/* Footer texts OUTSIDE the dotted box */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{
              mt: 1,
              px: 1,
              fontSize: "0.75rem",
              color: "#888888",
              gap: 1,
            }}
          >
            <span>Accepted formats: JPG, JPEG, PNG or WEBP</span>
            <span>Maximum file size: 4MB</span>
          </Stack>
        </>
      )}

      {/* Uploaded File Preview */}
      {uploadedFile && (
        <Paper elevation={1} sx={{ p: 2, borderRadius: 2, display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src={uploadedFile.preview}
            alt="Preview"
            sx={{ width: 80, height: 80, objectFit: "cover", borderRadius: 1 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" noWrap sx={{ maxWidth: 320, color: "#454545" }}>
              {uploadedFile.file.name}
            </Typography>
            <Typography variant="caption" color="#888888">
              Size: {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
            </Typography>
            <br />
            <Typography variant="caption" color="#888888">
              File type: {uploadedFile.file.type.split("/")[1].toUpperCase()}
            </Typography>
          </Box>
          <IconButton onClick={removeFile} color="error">
            <DeleteIcon sx={{color: "#002F70"}}/>
          </IconButton>
        </Paper>
      )}

      {/* Replace button when file exists */}
      {uploadedFile && (
        <Button variant="outlined" component="label" sx={{ mt: 2, textTransform: "none" }}>
          Replace Image
          <input
            type="file"
            hidden
            accept="image/jpeg,image/png,image/webp"
            onChange={handleInputChange}
          />
        </Button>
      )}
    </Box>
  );
}