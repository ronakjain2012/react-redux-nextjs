import Image from 'next/image';
import React from 'react';

class Logo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Image src="/ronak.png" alt="me" width="64" height="64" />;
  }
}

export default Logo;
