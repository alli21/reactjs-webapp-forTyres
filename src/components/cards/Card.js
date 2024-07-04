import React from "react"
import "./Card.css"
import { DoubleRightOutlined } from "@ant-design/icons"
import { Card } from "antd"
import { Data } from "./MapData"

const { Meta } = Card

export default function Cards({ background, text }) {
  return (
    <>
      <div className="card">
        <Card
          className="antdCard"
          hoverable
          style={{ width: 250 }}
          cover={<img alt="example" src={background} />}
        >
          <Meta title={text} />
        </Card>
      </div>
    </>
  )
}
