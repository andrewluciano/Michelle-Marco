import { styled } from '/src/stitches.config';

export const Container = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    boxSizing:'border-box',
    padding:'55px 0',
    flexDirection: "column",
    alignItems:'center',
    minHeight: "65vh",
    height:'643px',
    maxHeight:'643px',
    backgroundImage:'url(/src/assets/images/principal/chamada-principal.png)',
    backgroundSize:'cover',
    backgroundPosition:' 15%'
    
  });


  export const BlocoSaveTheDate = styled("div", { 
    position:'absolute',
    bottom:'-30px',
    left:'50%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    transform:'translateX(-50%)',
    backgroundColor:'#fff',
    width:'50vw',
    height:'60px',
    boxSizing:'border-box',
    boxShadow:'0 10px 10px rgba(0,0,0,0.1)',
    fontFamily:'FoglihtenNo06',
    fontSize:'1.25rem',
    color:'$colorPrimary',
  })

  export const TituloBlocoSaveTheDate = styled("h2", { 
    position: 'relative',
    margin:'0px',
    marginTop:'-25px',
    marginBottom:'5px',
    fontSize:'0.875rem',
    fontWeight:'800',
    backgroundColor:'#CEB992',
    color:"#000",
    width: '50%',
    textTransform:'uppercase',
    boxSizing:'border-box',
    padding:'5px 20px'
  });

  
  