import React from 'react';
import { links } from './root.helper.js';
import { Link } from '@reach/router';

export default function Root(props) {
  return (
    <div className="h-16 flex items-center px-6 bg-primary text-white">
      {links.map((link) => {
        return (
          <Link key={link.href} className="p-6" to={link.href}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
