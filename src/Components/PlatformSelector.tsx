import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { platforms } from "../Platforms";
import useLinkManagement from "../hooks/useLinkManagement";
const PlatformSelector = ({
  id,
  platform,
}: {
  id: string;
  platform: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handlePlatformChange } = useLinkManagement();

  return (
    <>
      <label
        htmlFor={`platform-${id}`}
        className="text-sm text-[#333] block mb-1"
      >
        Platform
      </label>
      <FormControl id={`platform-${id}`} className="w-full mb-4">
        <Select
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          MenuProps={{
            PaperProps: {
              sx: {
                paddingX: "16px",
                marginTop: "12px",
                border: "1px solid #D9D9D9",
                borderRadius: "8px",
              },
            },
          }}
          IconComponent={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              className={`${isOpen && "rotate-180 "} `}
              height="9"
              fill="none"
              viewBox="0 0 14 9"
            >
              <path stroke="#633CFF" strokeWidth="2" d="m1 1 6 6 6-6" />
            </svg>
          )}
          value={platform}
          onChange={(e) => handlePlatformChange(e, id)}
          sx={{
            marginBottom: "16px",
            borderRadius: "12px",
            height: "48px",
            display: "flex",
            flexDirection: "row",
            paddingRight: "12px",
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D9D9D9",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#633CFF",
              boxShadow: "0 0 9px 1px #633cff4d",
            },
            "& .MuiSelect-select  ": {
              display: "flex",
              alignItems: "center",
              gap: "12px",
              svg: { path: { fill: "#737373" } },
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#633CFF",
            },
          }}
        >
          {Array.from(platforms).map(([key, value]) => (
            <MenuItem
              sx={{
                paddingX: "2px",
                paddingY: "12px",
                color: "#737373",
              }}
              key={key}
              value={key}
              className="flex gap-3"
            >
              {value.logo}
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default PlatformSelector;
