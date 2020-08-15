import React, { useState } from "react";
import { Divider, Switch, Slider, Table, Menu, Tabs } from "antd";
// import Select from 'antd/es/select';
import "./app.less";

const { TabPane } = Tabs;
function App() {
  const dataSource = [
    // {
    //   key: '1',
    //   name: '胡彦斌',
    //   age: 32,
    //   address: '西湖区湖底公园1号',
    // },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: '年龄',
    //   dataIndex: 'age',
    //   key: 'age',
    // },
    // {
    //   title: '住址',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
  ];

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="mail">Navigation One</Menu.Item>
        <Menu.Item key="app">Navigation Two</Menu.Item>
        <Menu.Item key="alipay">Navigation Four - Link</Menu.Item>
      </Menu>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
