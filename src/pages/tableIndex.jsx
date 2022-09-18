
import { Badge,    Table } from 'antd';
import React from 'react';


const TableApp = () => {


    const TableOne= () => {
        const columns = [
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
         
          {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
          },
         
        ];
        const data = [];
    
        for (let i = 0; i < 3; ++i) {
          data.push({
            key: i.toString(),
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
    
        return <Table columns={columns} dataSource={data} pagination={false} />;
      };


    const TableTwo= () => {
        const columns = [
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
         
          {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
          },
         
        ];
        const data = [];
    
        for (let i = 0; i < 3; ++i) {
          data.push({
            key: i.toString(),
            date: '2014-12-24 23:12:00',
            name: 'This is production name',
            upgradeNum: 'Upgraded: 56',
          });
        }
    
        return <Table columns={columns} dataSource={data} pagination={false} expandable={{
            expandedRowRender:record => <TableOne></TableOne>,
            // defaultExpandedRowKeys: ['0'],
          }}/>;
      };



  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum',
      },
      
    ];
    const data = [];

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false}   expandable={{
        expandedRowRender:record => <TableTwo></TableTwo>,
        // defaultExpandedRowKeys: ['0'],
      }}  />;
  };



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Upgraded',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
   
  ];
  const data = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <>
    
      <Table
        columns={columns}
        dataSource={data}
        
        expandable={{
            onExpand:(e, record)=>{console.log('111',record)},
            expandedRowRender,
            // defaultExpandedRowKeys: ['0'],
          }}
      />
     
     
    </>
  );
};

export default TableApp;