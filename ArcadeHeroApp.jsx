import React from 'react';
import { Link, Button } from 'framework7-react';
import './ArcadeHeroApp.less';

const ArcadeHeroApp = (props) => {
  const { app } = props;
  return (
    <Link
      href={`/app/${app.id}`}
      routeProps={{ backText: 'Arcade' }}
      className="arcade-hero-app"
      data-swiper-parallax-x="-20%"
    >
      <img src={app.icon} loading="lazy" alt={app.title} />
      <div className="arcade-hero-app-inner">
        <div className="arcade-hero-app-label">Showcase</div>
        <div className="arcade-hero-app-title">{app.title}</div>
        <div className="arcade-hero-app-subtitle">{app.subtitle}</div>
      </div>
      <Button className="prevent-active-state-propagation" type="button" round>
        Get
      </Button>
    </Link>
  );
};
export default ArcadeHeroApp;
