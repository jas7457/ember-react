/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

import EmberContext from '../context/EmberContext';

export default function EmberLinkTo({ children, route, model, options }) {
  const { routerService } = useContext(EmberContext);

  // Ember is weird, you can't simply pass route, model, and options to it if they're undefined.
  const args = [route, model, options].filter((arg) => !!arg);
  const url = routerService.urlFor(...args);

  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();

        routerService.transitionTo(...args);
      }}
    >
      {children}
    </a>
  );
}
