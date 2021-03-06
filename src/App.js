import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
              <Route exact path="/news" component={News} />
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={4}
          style={{ color: "white", textAlign: "center" }}
        >
          <Link to="/" className="footer-logo">
            Krypto
          </Link>
        </Typography.Title>
        <Typography.Text
          level={5}
          style={{ color: "gray", textAlign: "center" }}
        >
          Copyright © 2021
          <br />
          All Rights Reserved.
        </Typography.Text>
        <Space>
          <Link to="/">Home</Link> | <Link to="/exchanges">Exchanges</Link> |
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
}
