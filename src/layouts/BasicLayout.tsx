import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';

interface BasicLayoutProps {
  location: Location
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location } = props;
  console.log(props);
  useEffect(() => {
  }, []);
  return (
    <div>
      {children}
      <BottomNav pathname={""}/>
    </div>);
};

export default BasicLayout;
