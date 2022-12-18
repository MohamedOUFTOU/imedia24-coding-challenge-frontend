import React from 'react';
import './App.css';
import {Divider, Layout} from "antd";
import {PokemonList} from "./component/pokemonList/pokemon.list";

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
      <Layout style={{width: '100%'}}>
          <Header
              style={{ textAlign: 'center', color: 'white' }}
          > Poke API v2</Header>
          <Content>
              <Divider />
              <PokemonList />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Ant Mohamed Ouftou</Footer>
      </Layout>
);
}
export default App;
