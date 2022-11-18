/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import SidebarRow4 from 'components/SidebarRow4/SidebarRow4';
import { Sidebar3Props } from 'types';

 
const CollapsableOpen: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `700px`,  
  width: "100%",  
  justifyContent: `space-between`,  
  alignItems: `flex-start`,  
  padding: a=1 ? `16px 8px` : `16px`,  
  boxSizing: `border-box`,  
});
  
const Top: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `20px 0px 0px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: a=1 ? "unset" : `482.5px`,  
  width: a=1 ? `96px` : `222px`,  
});
  
const Logo: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: a=1 ? `flex-start` : `center`,  
  alignItems: `center`,  
  padding: a=1 ? `0px 0px 0px 42px` : `0px`,  
  boxSizing: `border-box`,  
  alignSelf: a=1 ? "unset" : `stretch`,  
  margin: `0px`,  
  width: a=1 ? `55px` : `222px`,  
});
  
const MoonbaseLogo: any = styled("img")({  
  height: a=1 ? `12px` : `14.22px`,  
  width: a=1 ? `108px` : `128px`,  
  objectFit: a=1 ? `cover` : `contain`,  
  margin: `0px`,  
});
  
const MoonbaseLogoM: any = styled("img")({  
  height: a=1 ? `15px` : `11px`,  
  width: a=1 ? `13px` : `9px`,  
  objectFit: a=1 ? `contain` : `cover`,  
  margin: `0px`,  
});
  
const List: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `56px 0px 0px 0px`,  
  width: a=1 ? `96px` : `222px`,  
});
  
const SidebarRow41: any = styled(SidebarRow4)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `50px`,  
  margin: `0px`,  
}));
  
const SidebarRow42: any = styled(SidebarRow4)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `50px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow43: any = styled(SidebarRow4)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `50px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow44: any = styled(SidebarRow4)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `50px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow45: any = styled(SidebarRow4)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `50px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const SidebarRow46: any = styled(SidebarRow4)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  height: `50px`,  
  margin: `10px 0px 0px 0px`,  
}));
  
const Account: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  width: a=1 ? `96px` : `222px`,  
});
  
const Divide: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `10px 0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
  width: a=1 ? `96px` : `222px`,  
});
  
const DividerHorizontal: any = styled("div")(({ theme }: any) =>({  
  border: `1px solid theme.customShadows["Light"]["Other"]["Divider"].color`,  
  boxSizing: `border-box`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: `1px`,  
  margin: `0px`,  
  width: a=1 ? `96px` : `222px`,  
}));
  
const Btm: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px 30px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `8px 0px 0px 0px`,  
  width: a=1 ? `96px` : `222px`,  
});
  
const Avatar1: any = styled("img")({  
  height: `32px`,  
  width: `32px`,  
  objectFit: `cover`,  
  margin: `0px`,  
});
  
const EllenCho: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(53, 53, 53, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `500`,  
  fontSize: `16px`,  
  letterSpacing: `0.64px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  flexGrow: `1`,  
  margin: `0px 0px 0px 8px`,  
});
 
function Sidebar3(props: Sidebar3Props): JSX.Element {
  
  return (
    <CollapsableOpen  className={props.className}   >
      <Top >
        <Logo >
          {(!(a=1)) &&
            <MoonbaseLogo  src={`assets/images/Sidebar3_MoonbaseLogo.png`} alt={"MoonbaseLogo"}/>
          }
          {((a=1)) &&
            <MoonbaseLogoM  src={`assets/images/Sidebar3_MoonbaseLogo_M.png`} alt={"MoonbaseLogo_M"}/>
          }
        </Logo>
        <List >
          <SidebarRow41   />
          <SidebarRow42   />
          <SidebarRow43   />
          <SidebarRow44   />
          <SidebarRow45   />
          <SidebarRow46   />
        </List>
      </Top>
      <Account >
        <Divide >
          <DividerHorizontal >
          </DividerHorizontal>
        </Divide>
        <Btm >
          <Avatar1  src={`assets/images/Sidebar3_Avatar.png`} alt={"Avatar"}/>
          {(!(a=1)) &&
            <EllenCho >
              {`Ellen Cho`}
                </EllenCho>
          }
        </Btm>
      </Account>
    </CollapsableOpen>
  );
}

export default Sidebar3;