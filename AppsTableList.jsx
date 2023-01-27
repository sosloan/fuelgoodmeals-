import React from 'react';
import { List, ListItem, Button } from 'framework7-react';
import RatingStars from './RatingStars';

import './AppsTableList.less';

const AppsTableList = ({
  apps,
  backText,
  scrollable = true,
  showScreenshots,
  showRating,
  style,
}) => {
  const classes = ['apps-table-list'];
  if (scrollable) classes.push('apps-table-list-scrollable');
  if (showScreenshots) classes.push('apps-table-list-with-screenshots');
  if (showRating) classes.push('apps-table-list-with-rating');
  return (
    <List
      className={classes.join(' ')}
      noChevron
      noHairlines
      noHairlinesBetween={showScreenshots}
      style={style}
    >
      {apps.map((app) => (
        <ListItem
          link={`/app/${app.id}`}
          key={app.id}
          routeProps={{ backText }}
        >
          <div className="apps-table-list-title" slot="title">
            {app.title}
          </div>
          <div className="apps-table-list-subtitle item-text" slot="title">
            {app.subtitle}
          </div>
          {showRating && (
            <div className="apps-table-list-rating" slot="title">
              <RatingStars rating={app.rating} />
              <span>930</span>
            </div>
          )}
          <img
            loading="lazy"
            className="apps-table-list-image"
            slot="media"
            src={app.icon}
            alt={app.title}
          />
          <div className="apps-table-list-button" slot="inner">
            <Button
              className="prevent-active-state-propagation"
              type="button"
              round
            >
              Get
            </Button>
            <span>In-App Purchases</span>
          </div>
          {showScreenshots && (
            <div className="apps-table-list-screenshots" slot="content-end">
              {app.screenshots.slice(0, 3).map((shot) => (
                <img key={shot} src={shot} loading="lazy" alt="screenshot" />
              ))}
            </div>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default AppsTableList;
