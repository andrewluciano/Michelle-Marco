import { styled } from '/src/stitches.config';

export const Container = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    boxSizing:'border-box',
    padding:'86px 0',
    flexDirection: "column",
    minHeight: "750px",
    height: "auto",
    
  });
  export const ImagemDays = styled("figure", {     
    width:'262px',
    height:'262px',
    margin:'0px',
    padding:'0px',
    border:'10px solid #fff',
    borderRadius:'100px 0 100px 0',
    display: 'block',
    overflow:'hidden',
    img:{
      margin:'0px',
      padding:'0px',
      maxWidth:'262px',
      maxHeight:'262px',
      

    }
  });

  
