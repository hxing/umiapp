import React, {useEffect} from 'react';
import BottomNav from '@/components/BottomNav';

interface BasicLayoutProps {}
const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const {children} = props;
  useEffect(() => {  }, []);
  return <div>
    {children}
    <BottomNav/>
  </div>;
}

export default BasicLayout;
