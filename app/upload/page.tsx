"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          alt="Uploaded Image"
          width={270}
          height={180}
        />
      )}
      <CldUploadWidget
        uploadPreset="i4ryr78p"
        options={{
          sources: ["local", "camera"],
          multiple: true,
          maxFiles: 3,
        }}
        onSuccess={(result) => {
          const info = result.info as { public_id: string };
          console.log("Upload successful:", info.public_id);
          setPublicId(info.public_id);
        }}
        onError={(error) => {
          console.error("Upload failed:", error);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
