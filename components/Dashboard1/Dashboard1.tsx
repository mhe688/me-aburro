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
import Sidebar2 from 'components/Sidebar2/Sidebar2';
import Stat4 from 'components/Stat4/Stat4';
import Stat6 from 'components/Stat6/Stat6';
import EventList from 'components/EventList/EventList';
import Table3 from 'components/Table3/Table3';
import { Dashboard1Props } from 'types';

 
const TypeQuestSidebarOpen: any = styled("div")({  
  backgroundColor: `rgba(242, 242, 242, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: "100%",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px 20px 0px 0px`,  
  boxSizing: `border-box`,  
  height: `926px`,  
});
  
const Page: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `926px`,  
  margin: `0px`,  
  width: `1467px`,  
});
  
const Sidebar21: any = styled(Sidebar2)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  width: `290px`,  
  margin: `0px`,  
}));
  
const Content: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px`,  
  width: `1177px`,  
});
  
const TopContent: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
  width: `1177px`,  
});
  
const LeftContent: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
  width: `858px`,  
});
  
const Sec1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `20px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
  overflow: `hidden`,  
  width: `858px`,  
});
  
const Hero: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  border: `1px solid rgba(176, 176, 176, 0.5)`,  
  boxSizing: `border-box`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `18px 78px 18px 66px`,  
  alignSelf: `stretch`,  
  height: `306px`,  
  margin: `0px`,  
  width: `818px`,  
});
  
const HeroContent: any = styled("img")({  
  height: `270px`,  
  width: `674px`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Frame43: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `18px 20px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `164px`,  
  margin: `0px`,  
  overflow: `hidden`,  
  width: `858px`,  
});
  
const Stat41: any = styled(Stat4)(({ theme }: any) =>({  
  flexGrow: `1`,  
  height: `120px`,  
  margin: `0px`,  
}));
  
const Stat61: any = styled(Stat6)(({ theme }: any) =>({  
  flexGrow: `1`,  
  margin: `0px 0px 0px 30px`,  
}));
  
const RightContent: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `319px`,  
  margin: `0px`,  
});
  
const Nav: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `110px`,  
  margin: `0px`,  
  width: `319px`,  
});
  
const Content1: any = styled("div")({  
  backgroundColor: `rgba(242, 242, 242, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `center`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  height: `80px`,  
  margin: `0px`,  
  width: `319px`,  
});
  
const Frame6: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-end`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
  width: `319px`,  
});
  
const RightSide2: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-end`,  
  alignItems: `center`,  
  padding: `0px 28px 0px 0px`,  
  boxSizing: `border-box`,  
  flexGrow: `1`,  
  margin: `0px`,  
  width: `319px`,  
});
  
const Frame5: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
  width: `220.94px`,  
});
  
const Avatar1: any = styled("img")({  
  height: `32px`,  
  width: `32px`,  
  objectFit: `cover`,  
  margin: `0px`,  
});
  
const AndrewSmith: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Inter`,  
  fontWeight: `700`,  
  fontSize: `16px`,  
  letterSpacing: `0.64px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  width: `127px`,  
  height: `25.83px`,  
  margin: `0px 0px 0px 20px`,  
});
  
const Rectangle9: any = styled("img")({  
  height: `10.97px`,  
  width: `21.94px`,  
  margin: `0px 0px 0px 20px`,  
});
  
const Frame44: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: theme.customShadows["Elevation"]["3"].boxShadow,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `20px 0px 0px 0px`,  
  width: `319px`,  
}));
  
const EventList1: any = styled(EventList)(({ theme }: any) =>({  
  width: `309px`,  
  height: `352px`,  
  margin: `0px`,  
}));
  
const BtmContent: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
  width: `1177px`,  
});
  
const Table31: any = styled(Table3)(({ theme }: any) =>({  
  alignSelf: `stretch`,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
 
function Dashboard1(props: Dashboard1Props): JSX.Element {
  
  return (
    <TypeQuestSidebarOpen  className={props.className}   >
      <Page >
        <Sidebar21   />
        <Content >
          <TopContent >
            <LeftContent >
              <Sec1 >
                <Hero >
                  <HeroContent  src={`assets/images/Dashboard1_hero_content.png`} alt={"hero content"}/>
                </Hero>
              </Sec1>
              <Frame43 >
                <Stat41   />
                <Stat61   />
              </Frame43>
            </LeftContent>
            <RightContent >
              <Nav >
                <Content1 >
                  <Frame6 >
                    <RightSide2 >
                      <Frame5 >
                        <Avatar1  src={`assets/images/Dashboard1_Avatar.png`} alt={"Avatar"}/>
                        <AndrewSmith >
                          {`Andrew Smith`}
                            </AndrewSmith>
                        <Rectangle9  src={`assets/images/Dashboard1_Rectangle_9.png`} alt={"Rectangle 9"}/>
                      </Frame5>
                    </RightSide2>
                  </Frame6>
                </Content1>
              </Nav>
              <Frame44 >
                <EventList1   />
              </Frame44>
            </RightContent>
          </TopContent>
          <BtmContent >
            <Table31   />
          </BtmContent>
        </Content>
      </Page>
    </TypeQuestSidebarOpen>
  );
}

export default Dashboard1;
