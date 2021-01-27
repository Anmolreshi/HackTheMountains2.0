import { Typography, Grid } from "@material-ui/core";

import React from "react";
const Holder = (props) => {
   
  const opcodes =[{
                    "role":"Organizer",
                    "index":1,
                    "card_color":"#7F1E8E",
                    "font_color":"#FFFFFF"
                  },
                  {
                    "role":"Web Engineering",
                    "index":2,
                    "card_color":"#00AADF",
                    "font_color":"#FFFFFF"
                  },
                  {
                    "role":"Content Specialist",
                    "index":3,
                    "card_color":"#EFA744",
                    "font_color":"#202136"
                  },
                  {
                    "role":"Graphics Specialist",
                    "index":4,
                    "card_color":"#13B6A2",
                    "font_color":"#FFFFFF"
                  },
                  {
                    "role":"Outreach Evangelist",
                    "index":5,
                    "card_color":"#DC8F8F",
                    "font_color":"#000000"
                  },
                  {
                    "role":"Technical Team",
                    "index":6,
                    "card_color":"#DC8F8F",
                    "font_color":"#000000"
                  }             
    ]


  const getRole=(index)=>{
    const config = opcodes[index-1]
    return config.role;
  }

 const index = props.index;
  return (
    
    <Grid container>
 
      <Grid container  >
        <Grid
        id="teamM"
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{wordWrap:"break-word", textAlign:'center'}}
        >
        <br/>
        <a rel="noopener noreferrer" 
              target="_blank" style={{textDecoration:'none', color:"white"}} 
              href = {props.linkedin}>
            <img
            alt="MEMBERS"
              src={props.image}
              width="150px"
              style={{ borderRadius:'100%' }}
            />
        </a>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <br/>
          <Typography variant="h5" style={{fontSize:"18px",fontFamily:'consolas', wordWrap:"break-word", textAlign:'center'}}>
            <b>{props.name}</b>
            </Typography>
          <Typography variant="p" style={{fontSize:"14px",fontFamily:'consolas', wordWrap:"break-word"}}>
            <b>
            {getRole(index)} {props.designation}</b>
          </Typography>
        </Grid>
        </Grid>
      </Grid>
   
    </Grid>
  );
};
export default Holder;
