import { styled } from '/src/stitches.config';

export const Container = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    boxSizing:'border-box',
    padding:'55px 0',
    flexDirection: "column",
    minHeight: "580px",
    height: "auto",
    
  });

  export const ContainerItens = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    boxSizing:'border-box',
    flexDirection: "row",
    flexWrap:'wrap',
  });
  export const Blocos = styled("div", { 
    wrap:'1',
    flex:'1',
    position:'relative',
    padding:'60px 0',
    display: "flex",
    boxSizing:'border-box',
    flexDirection: "column",
    margin:'0px 40px',
    justifyContent: 'center',
    alignItems: 'center'
  });
  export const Titulo = styled("h3", { 
    fontSize:'2.5rem',
    color:'$colorPrimary',
    fontFamily:'FoglihtenNo06',
    display:'flex',
    flexDirection:'Column',
    lineHeight:'2rem',
    span :{
      
      fontSize:'1.8rem',
    }

  });
  
  export const Paragrafo = styled("p", { 


  });
