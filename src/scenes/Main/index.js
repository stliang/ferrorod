import React from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  HeaderMockUp,
  NavHeaderMockUp,
  NavContentMockUp,
  ContentMockUp,
  FooterMockUp,
} from "@mui-treasury/mockup/layout";
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from "@mui-treasury/layout";

import ContentEx from "./components/ContentEx";
import FooterEx from "./components/FooterEx";
import HeaderEx from "./components/HeaderEx";
import NavContentEx from "./components/NavContentEx";
import NavHeaderEx from "./components/NavHeaderEx";

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

scheme.enableAutoCollapse('unique_id', 'md')

const Main = () => {
  return (
    <Root scheme={scheme}>
      {({ state: { sidebar } }) => (
        <>
          <CssBaseline />
          <Header>
            <Toolbar>
              <SidebarTrigger sidebarId="unique_id" />
              <HeaderEx />
            </Toolbar>
          </Header>
          <DrawerSidebar sidebarId="unique_id">
            <SidebarContent>
              <NavHeaderEx collapsed={sidebar.unique_id.collapsed} />
              <NavContentEx />
            </SidebarContent>
            <CollapseBtn />
          </DrawerSidebar>
          <Content>
            <ContentEx />
          </Content>
          <Footer>
            <FooterEx />
          </Footer>
        </>
      )}
    </Root>
  );
};

export default Main;