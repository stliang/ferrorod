import React from 'react';
import { Container, Content, Footer, Hero } from 'react-bulma-components';
import Nav from '../Nav'
import Router from '../Router';

const Layout = (props) => {
    return (
        <Hero size="fullheight">
        <Hero.Head>
            <Nav />
        </Hero.Head>
        <Hero.Body> 
            <Router />
        </Hero.Body>
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <p>
                  <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    );
}

export default Layout;