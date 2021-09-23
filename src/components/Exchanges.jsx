import React from "react";
import millify from "millify";
import HTMLReactParser from "html-react-parser";

import { Collapse, Row, Col, Typography, Avatar } from "antd";

import { useGetExchangesQuery } from "../api/cryptoApi";

export default function Exchanges() {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  console.log("exchanges", exchangesList);

  if (isFetching) return "Loading...";

  return (
    <>
      <Row className="exchanges-heading">
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Window</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row className="exchanges-table">
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Collapse.Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Typography.Text>
                        <strong>{exchange.rank}</strong>
                      </Typography.Text>
                      <Avatar
                        className="exchanges-img"
                        src={exchange.iconUrl}
                      />
                      <Typography.Text>
                        <strong>{exchange.name}</strong>
                      </Typography.Text>
                    </Col>
                    <Col span={6}>{millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Collapse.Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
}
