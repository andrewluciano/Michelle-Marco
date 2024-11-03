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
    padding:'0',
    img:{
      width:'100%',
      border:'10px solid #fff',
      borderRadius:'100px 0 100px 0',
    }
  });

  
