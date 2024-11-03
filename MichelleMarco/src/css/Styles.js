import { styled } from '/src/stitches.config';

export const Container = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    padding:'0px',
    boxSizing:'border-box',
    flexDirection: "column",
    height: "auto",
    width:'1128px',
    maxWidth:'1128px',
    backgroundColor:'$bgPrimary',
    fontFamily:'Bitstream Iowan Old Style BT'
  });

  export const TituloBloco = styled("h2", { 
    fontSize:'2.5rem',
    color:'$colorPrimary',
    fontFamily:'FoglihtenNo06',
    textTransform: 'uppercase',
    margin:'0px'

  })
  export const SubTituloBloco = styled("h3", { 
    fontSize:'1rem',
    color:'$colorPrimary',
    fontFamily:'Bitstream Iowan Old Style BT',
    textTransform: 'uppercase',
    margin:'0px'
  })

  export const ButtonDefault = styled("a", { 
    position:'relative',
    fontSize:'1rem',
    boxSizing:'border-box',
    border:'0',
    width:'auto',
    color:'$colorPrimary',
    padding:'9px 16px',
    backgroundColor:'#fff',
    boxShadow:'0px 0px 10px rgba(0,0,0,0.1)',
    fontFamily:'Bitstream Iowan Old Style BT',
    '&:hover':{
      backgroundColor:'$colorPrimary',
      color:'#fff'
    }
  });
  