import React from 'react'
import Button from '@mui/material/Button';

export const ViewerPDF = ({pdfPost}) => {
  const style = {display: "block", margin: "auto", width: "100%", height: "400px"}
  return (
  <div>
    <a target="_blanck" href={pdfPost}><Button size="small" style={{marginTop: "0%", marginBottom: "1%"}}>Ver doc</Button></a>
    <object data={pdfPost} style={style} label="pdf"></object>
  </div>
  )}
