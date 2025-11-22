import React from 'react';

const FilmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 12V5.25m9.75 12h7.5m-7.5 12l6-12m-6 12v-3.75m1.5-3.375h6m-6 6h6m-6-1.5l1.5-6m-1.5 6l1.5-6m6 6v-3.375m-7.5-3.375h-1.5c-1.125 0-1.625 1.004-1.625 2.25v1.5c0 1.246.5 2.25 1.625 2.25h1.5m-1.5-6h-1.5c-1.125 0-1.625 1.004-1.625 2.25v1.5c0 1.246.5 2.25 1.625 2.25h1.5M4.5 5.25v13.5m15-13.5v13.5" />
  </svg>
);

export default FilmIcon;