import React, { useEffect, useRef, useState } from 'react';
import $ from 'dom7';
import { Page, Navbar } from 'framework7-react';
import AppstorePageTitle from './AppstorePageTitle';
import './AppstorePage.less';

const AppstorePage = ({
  title,
  navbarHeading,
  noNavbarHairline,
  searchbarEnabled,
  noCollapsedNavbar,
  className = '',
  children,
}) => {
  const searchbarEnabledPrev = useRef(false);
  const [searchbarState, setSearchbarState] = useState('disabled');
  const navbarRef = useRef(null);

  const stateClasses = [];
  if (noCollapsedNavbar) stateClasses.push('appstore-page-no-collapsed-navbar');
  if (searchbarState === 'enabled')
    stateClasses.push('with-appstore-searchbar-enabled');
  if (searchbarState === 'closing')
    stateClasses.push('with-appstore-searchbar-closing');

  const pageClasses = ['appstore-page'];
  if (className) pageClasses.push(className);
  pageClasses.push(...stateClasses);

  const navbarClasses = ['appstore-page-large-navbar', ...stateClasses];

  useEffect(() => {
    const prev = searchbarEnabledPrev.current;
    const current = searchbarEnabled;

    if (prev === true && current === false) {
      setSearchbarState('closing');
    }
    if (!prev && current) {
      setSearchbarState('enabled');
    }
    searchbarEnabledPrev.current = current;
  }, [searchbarEnabled]);

  useEffect(() => {
    if (searchbarState === 'closing') {
      $(navbarRef.current.el).once('transitionend', () => {
        setSearchbarState('disabled');
      });
    }
  }, [searchbarState]);

  return (
    <Page className={pageClasses.join(' ')}>
      <Navbar
        className={navbarClasses.join(' ')}
        large
        transparent
        title={title}
        noHairline={noNavbarHairline}
        ref={navbarRef}
      />
      {title && <AppstorePageTitle title={title} heading={navbarHeading} />}
      {children}
    </Page>
  );
};

export default AppstorePage;
