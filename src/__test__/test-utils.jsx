import React from 'react';
import { render } from '@testing-library/react';

export function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export function ThemeProvider({ children }) {
  return <div className="theme-provider">{children}</div>;
}
export function I18nProvider({ children }) {
  return <div className="i18nProvider">{children}</div>;
}

export function RootProvider({ children }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}

export const customRender = (ui, options) => render(ui, {
  wrapper: RootProvider,
  ...options,
});
