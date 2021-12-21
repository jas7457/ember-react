import React from 'react';

export default function ExternalLink({
  children,
  onClick,
  href,
  ...rest
}: React.PropsWithoutRef<JSX.IntrinsicElements['a']>) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);

        (window.top ?? window).postMessage(
          {
            event: 'external-link',
            href,
          },
          '*'
        );
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
