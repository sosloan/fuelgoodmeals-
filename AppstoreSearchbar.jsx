import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { Subnavbar, Searchbar } from 'framework7-react';
import './AppstoreSearchbar.less';

const AppstoreSearchbar = forwardRef((props, ref) => {
  const { className = '', children, ...rest } = props;
  const f7Searchbar = useRef(null);
  useImperativeHandle(ref, () => ({
    f7Searchbar: f7Searchbar.current,
  }));

  return (
    <Subnavbar className={`appstore-searchbar ${className}`}>
      <Searchbar ref={f7Searchbar} backdrop={false} customSearch {...rest} />
    </Subnavbar>
  );
});

export default AppstoreSearchbar;
