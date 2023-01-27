import React from 'react';

import './AppstoreBlockTitle.less';

const AppstoreBlockTitle = ({ title, noHairline, children }) => (
  <div
    className={`block-title appstore-block-title${
      noHairline ? ' no-hairline' : ''
    }`}
  >
    {title && <span>{title}</span>}
    {children}
  </div>
);

export default AppstoreBlockTitle;
