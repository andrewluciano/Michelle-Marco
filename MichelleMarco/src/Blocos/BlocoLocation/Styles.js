import { styled } from '/src/stitches.config';

export const Container = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    boxSizing:'border-box',
    padding:'55px 0',
    flexDirection: "column",
    minHeight:'550px',    
    height: "auto",
    backgroundColor:'#fff'
  });

  export const ImagemDays = styled("figure", {     
    width:'auto',
    height:'450px',    
    margin:'0px',
    padding:'0',
    img:{  
      width:'auto',
      height:'100%',
      border:'10px solid #fff',
      borderRadius:'100px 0 100px 0',
    }
  });

  
