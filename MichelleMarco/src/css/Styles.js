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
  export const AreaTituloBloco = styled("div", { 
    position:'relative',
    margin:'0',
    display: "flex",
    padding:'0px',
    flexDirection: "column",
    justifyContent:'center',
    alignItems:'center',
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
    margin:'0px',
    width: '85vw',
    maxWidth:'800px'
  })

  export const ButtonDefault = styled("a", { 
    position:'relative',
    fontSize:'1rem',
    borderRadius:'2px',
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
      color:'#fff',
      cursor:'pointer',
    },
    variants:{
      tipo: {
        primary:{
          backgroundColor:'#fff',
          color:'$colorPrimary',
          '&:hover':{
            backgroundColor:'$colorPrimary',
            color:'#fff',
            cursor:'pointer',
          },
        },
        secondary:{
          backgroundColor:'$colorPrimary',
          color:'#fff',
          '&:hover':{
            backgroundColor:'#fff',
            color:'$colorPrimary',
            cursor:'pointer',
          },
        },
        tertiary:{
          backgroundColor:'#FBF4E7',
          color:'#colorPrimary',
          '&:hover':{
            backgroundColor:'#fff',
            color:'$colorPrimary',
            cursor:'pointer',
          },
        },
      },
    }
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    
    '&.alignLeft':{
      textAlign:'center',
      alignItems: 'flex-start',
    },
    variants:{
      largura: {
        1:{
          wrap:'1',
          flex:'1',
        },
        2:{
          wrap:'2',
          flex:'2',
        },
        3:{
          wrap:'3',
          flex:'3',
          margin:'0px 0px',
        },
      },
      size:{
        default:{

        },
        destaque:{
          transform:'scale(1.1)',
          p:{
            position:'relative',
            top:'-15px'
          },
          a:{
            position:'relative',
            top:'-25px'
          }
          
        },
      }
    }
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
    
    '&.decorativo':{
    position:'relative',
    textTransform:'uppercase',
    fontSize:'$20',
    color:'#fff',
    boxSizing:'border-box',
    padding:'50px 0',
    '&:before':{
      position: 'absolute',
      left:'50%',
      top:'0px',
      transform:'translateX(-50%) rotate(180deg)',
      display:'flex',
      content:'',
      backgroundImage:'url(/src/assets/images/principal/decorativo.svg)',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'cover',
      width:'380px',
      height:'24px'
    },
    '&:after':{
      position: 'absolute',
      bottom:'0px',
      left:'50%',
      transform:'translateX(-50%)',
      display:'flex',
      content:'',
      backgroundImage:'url(/src/assets/images/principal/decorativo.svg)',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'cover',
      width:'380px',
      height:'24px'
    }

    },
    '&.useHashTag':{
      fontFamily: 'Bitstream Iowan Old Style Italic BT',
      fontSize:'$14',
      textTransform:'uppercase',
      color:"#fff",
      fontStyle:'italic',
      letterSpacing:'1px'
    },
    '&.destaqueLocation':{
      display:'flex',
      fontSize:'$35',
      textAlign:'left'
    },
    '&.LocationAddress':{
      display:'flex',
      alignItems:'center',      
      justifyContent:'center',      
      fontSize:'$20',
      textAlign:'left',
      'img':{
        marginRight:'12px'

      },
    },
    '&.alturaFixa':{
      height:'80px',
    },
  });