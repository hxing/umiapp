import { Component } from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';

const menu = [{
  title: '首页',
  link: '/',
  icon: 'home',
}, {
  title: '购物车',
  link: '/cart',
  icon: 'cart',
}, {
  title: '订单列表',
  link: '/olist',
  icon: 'cart',
}, {
  title: '我的',
  link: '/user',
  icon: 'user',
},
];

class BottomNav extends Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
      <footer>
        <TabBar>
          {menu.map(({ title, link, icon }) =>
            <TabBar.Item
              key={link}
              title={title}
              icon={<span className={'icon icon' + icon} />}
              // selectedIcon={<span className={'red icon icon' + icon} />}
              // selected={true}
              onPress={() => {
                history.push(link);
              }}
            />)}
        </TabBar>
      </footer>);
  }
}

export default BottomNav;
