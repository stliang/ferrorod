import React from 'react';
import { Container, Content, Footer, Hero, Section } from 'react-bulma-components';
import Nav from '../Nav'
import Router from '../Router';

const Layout = (props) => {
  return (
    <Section>
    <Nav />
    <Hero size="fullheight">
      <Hero.Head>
      </Hero.Head>
      <Hero.Body>
        <Router />
      </Hero.Body>
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <strong>Ferro</strong> by <a href="https://github.com/stliang">Steve Liang</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
    </Section>
    );
}

export default Layout;