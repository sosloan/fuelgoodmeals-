import React, { useEffect } from 'react';
import { Button, Swiper, SwiperSlide } from 'framework7-react';
import $ from 'dom7';
import AppstorePage from '../components/AppstorePage';
import AppstorePageTitle from '../components/AppstorePageTitle';
import AppstoreBlockTitle from '../components/AppstoreBlockTitle';
import AppsTableList from '../components/AppsTableList';

import { games, apps } from '../js/data';

import './Arcade.less';
import ArcadeHeroApp from '../components/ArcadeHeroApp';

const Arcade = () => {
  const heroGames = {
    crossyRoad: [...games, ...apps].filter((game) => game.id === 924373886)[0],
    netflix: [...games, ...apps].filter((game) => game.id === 363590051)[0],
    sevenDeadlySins: [...games, ...apps].filter(
      (game) => game.id === 1475440231,
    )[0],
  };
  const topGames = [...games]
    .sort((app1, app2) => app2.rating - app1.rating)
    .slice(0, 13)
    .slice(1);
  const newGames = [...games]
    .sort(
      (app1, app2) =>
        new Date(app2.release_date).getTime() -
        new Date(app1.release_date).getTime(),
    )
    .slice(0, 12);

  useEffect(() => {
    $('.arcade-promo-games-scroll').on('animationend', () => {
      $('.arcade-promo-games-scroll').toggleClass(
        'arcade-promo-games-scroll-reverse',
      );
    });
    return () => {
      $('.arcade-promo-games-scroll').off('animationend');
    };
  }, []);
  return (
    <AppstorePage noCollapsedNavbar className="appstore-arcade-page">
      <AppstorePageTitle title="Arcade" accountLink />

      <Swiper
        className="arcade-hero-swiper"
        cssMode
        parallax
        pagination
        observer
        observeParents
      >
        <SwiperSlide>
          <img
            className="arcade-hero-swiper-image"
            src="https://s.uiinitiative.com/demo/appstore-f7-react/apps-images/crossy-road-5.jpg"
            loading="lazy"
            alt={heroGames.crossyRoad.title}
          />
          <ArcadeHeroApp app={heroGames.crossyRoad} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="arcade-hero-swiper-image"
            src="https://s.uiinitiative.com/demo/appstore-f7-react/apps-images/netflix-7.jpg"
            loading="lazy"
            alt={heroGames.netflix.title}
          />
          <ArcadeHeroApp app={heroGames.netflix} />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="arcade-hero-swiper-image"
            src="https://s.uiinitiative.com/demo/appstore-f7-react/apps-images/the-seven-deadly-sins-8.jpg"
            loading="lazy"
            alt={heroGames.sevenDeadlySins.title}
          />
          <ArcadeHeroApp app={heroGames.sevenDeadlySins} />
        </SwiperSlide>
      </Swiper>

      <AppstoreBlockTitle title="Top Arcade Games" noHairline />
      <AppsTableList backText="Arcade" apps={topGames} />

      <AppstoreBlockTitle title="New Games" />
      <AppsTableList backText="Arcade" apps={newGames} />

      <div className="arcade-promo">
        <div className="arcade-promo-games">
          <div className="arcade-promo-games-scroll">
            <div className="arcade-promo-games-row">
              {games.slice(0, 10).map((app) => (
                <img
                  key={app.id}
                  src={app.icon}
                  alt={app.title}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="arcade-promo-games-row">
              {games.slice(10).map((app) => (
                <img
                  key={app.id}
                  src={app.icon}
                  alt={app.title}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="arcade-promo-title">
          <i className="f7-icons">logo_apple</i>
          <span>Arcade</span>
        </div>
        <Button className="arcade-promo-button" color="gray" large fill>
          See All Games
        </Button>
      </div>
    </AppstorePage>
  );
};

export default Arcade;
