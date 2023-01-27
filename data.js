/* eslint-disable */
import games from '../data/games.json';
import apps from '../data/apps.json';

[apps, games].flat().forEach((app) => {
  if (app.icon)
    app.icon = `https://s.uiinitiative.com/demo/appstore-f7-react/apps-images/${app.icon}`;
  app.screenshots = app.screenshots.map(
    (fileName) =>
      `https://s.uiinitiative.com/demo/appstore-f7-react/apps-images/${fileName}`,
  );
  app.screenshotsThumbs = app.screenshots.map((fileName) =>
    fileName.replace('.jpg', '-thumb.jpg'),
  );
});

export { games, apps };
