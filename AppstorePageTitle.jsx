import React from 'react';
import { Link } from 'framework7-react';
import avatarSrc from '../assets/avatar.jpeg';
import './AppstorePageTitle.less';

const AppstorePageTitle = ({ title, heading, accountLink = true }) => (
  <h1 className="appstore-page-title">
    {heading && <div className="appstore-page-title-heading">{heading}</div>}
    <span>{title}</span>
    {accountLink && (
      <Link href="/account/">
        <img src={avatarSrc} alt="Account" />
      </Link>
    )}
  </h1>
);

export default AppstorePageTitle;
