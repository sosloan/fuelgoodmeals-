import React, { useEffect, useRef, useState } from 'react';
import { List, ListItem, Preloader } from 'framework7-react';
import AppstorePage from '../components/AppstorePage';
import AppstoreSearchbar from '../components/AppstoreSearchbar';
import AppstoreBlockTitle from '../components/AppstoreBlockTitle';
import AppsTableList from '../components/AppsTableList';
import { apps, games } from '../js/data';

import './Search.less';

const shuffle = (arr = []) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const Search = () => {
  const searchbarRef = useRef(null);
  const [searchbarEnabled, setSearchbarEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const timeoutRef = useRef(null);

  const suggested = shuffle([...apps, ...games]).slice(0, 12);
  const suggestedRef = useRef(suggested);
  const discover = [
    'monthly calendar',
    'schedule',
    'video editing',
    'who wants to be a millionaire',
  ];

  const searchPrefill = (query) => {
    const searchbar = searchbarRef.current.f7Searchbar;
    searchbar.search(query);
  };

  const onSearchbarSearch = (searchbar, query) => {
    setSearchQuery(query.trim());
    setSearchResults([]);
  };

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    setSearchResults([]);
    if (searchQuery.length) {
      setSearchLoading(true);
      timeoutRef.current = setTimeout(() => {
        setSearchResults(shuffle([...apps, ...games]).slice(0, 12));
        setSearchLoading(false);
      }, 2000);
    }
  }, [searchQuery]);
  return (
    <AppstorePage
      title="Search"
      noNavbarHairline
      className="appstore-search-page"
      searchbarEnabled={searchbarEnabled}
    >
      <AppstoreSearchbar
        ref={searchbarRef}
        placeholder="Games, Apps, Stories and More"
        onSearchbarEnable={() => setSearchbarEnabled(true)}
        onSearchbarDisable={() => setSearchbarEnabled(false)}
        onSearchbarSearch={onSearchbarSearch}
      />

      {searchQuery && (
        <>
          {searchLoading && <Preloader size={28} />}
          {!searchLoading && searchResults.length > 0 && (
            <AppsTableList
              apps={searchResults}
              backText="Search"
              scrollable={false}
              showRating
              showScreenshots
            />
          )}
        </>
      )}
      {!searchQuery && (
        <>
          <AppstoreBlockTitle noHairline title="Discover" />
          <List
            className="quick-links-list safe-areas-inset"
            noChevron
            noHairlines
          >
            {discover.map((query) => (
              <ListItem
                link
                key={query}
                title={query}
                onClick={() => searchPrefill(query)}
              />
            ))}
          </List>

          <AppstoreBlockTitle noHairline title="Suggested" />
          <AppsTableList
            apps={suggestedRef.current}
            backText="Search"
            scrollable={false}
          />
        </>
      )}
    </AppstorePage>
  );
};

export default Search;
