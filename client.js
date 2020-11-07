// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface , Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('junction', { /* initial props */ }),
    r360.getDefaultSurface()
  );
  const Show = new Surface(
    1000,
    580,
    Surface.SurfaceShape.Flat
  );
  Show.setAngle(
    Math.PI/2,
    -0.05
  );
  r360.renderToSurface(
    r360.createRoot('Showroot') ,
    Show
  )

  const Company = new Surface (
    1000,
    600,
    Surface.SurfaceShape.Flat
  );
  Company.setAngle(
    -Math.PI/2,
    -0.05
  );
  r360.renderToSurface(
    r360.createRoot('Companyroot'),
    Company
  )
 //// 3D
 /*
 const location = new Location([-0.1, -0.85, -2.0]);
 // Render to this location
  r360.renderToLocation(
    r360.createRoot('My3DView'),
    location,
  );
*/
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('bg.jpg'));
}

window.React360 = {init};
