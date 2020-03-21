
  import React from 'react';
  import CssBaseline from '@material-ui/core/CssBaseline';
  import Toolbar from '@material-ui/core/Toolbar';
  import MenuIcon from '@material-ui/icons/Menu';
  import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
  import ChevronRightIcon from '@material-ui/icons/ChevronRight';
  import {
    Root,
    Header,
    Sidebar,
    Content,
    Footer,
    CollapseBtn,
    SidebarTrigger,
  } from '@mui-treasury/layout';
  import {
    HeaderMockUp,
    NavHeaderMockUp,
    NavContentMockUp,
    ContentMockUp,
    FooterMockUp,
  } from '@mui-treasury/mockup/layout';
  
  const config = {
  "autoCollapseDisabled": false,
  "collapsedBreakpoint": "sm",
  "heightAdjustmentDisabled": false,
  "xs": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "temporary",
      "width": 240,
      "collapsible": true,
      "collapsedWidth": 64
    },
    "header": {
      "position": "relative",
      "clipped": true,
      "offsetHeight": 56,
      "persistentBehavior": "fit"
    },
    "content": {
      "persistentBehavior": "fit"
    },
    "footer": {
      "persistentBehavior": "fit"
    }
  },
  "sm": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "persistent",
      "width": 256,
      "collapsible": true,
      "collapsedWidth": 64
    },
    "header": {
      "position": "relative",
      "clipped": false,
      "offsetHeight": 64,
      "persistentBehavior": "flexible"
    },
    "content": {
      "persistentBehavior": "flexible"
    },
    "footer": {
      "persistentBehavior": "flexible"
    }
  },
  "md": {
    "sidebar": {
      "anchor": "left",
      "hidden": false,
      "inset": false,
      "variant": "permanent",
      "width": 256,
      "collapsible": true,
      "collapsedWidth": 64
    },
    "header": {
      "position": "relative",
      "clipped": true,
      "offsetHeight": 64,
      "persistentBehavior": "fit"
    },
    "content": {
      "persistentBehavior": "fit"
    },
    "footer": {
      "persistentBehavior": "fit"
    }
  }
};
  
  const App = () => {
    return (
      <Root config={config}>
        {({ headerStyles, sidebarStyles, collapsed, opened }) => (
          <>
            <CssBaseline />
            <Header>
              <Toolbar>
                <SidebarTrigger className={headerStyles.leftTrigger}>
                  {opened ? <ChevronLeftIcon /> : <MenuIcon />}
                </SidebarTrigger>
                <HeaderMockUp />
              </Toolbar>
            </Header>
            <Sidebar>
              <NavHeaderMockUp collapsed={collapsed} />
              <div className={sidebarStyles.container}>
                <NavContentMockUp />
              </div>
              <CollapseBtn className={sidebarStyles.collapseBtn}>
                {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </CollapseBtn>
            </Sidebar>
            <Content>
              <ContentMockUp />
            </Content>
            <Footer>
              <FooterMockUp />
            </Footer>
          </>
        )}
      </Root>
    )
  }
  
  export default App