import React from 'react';

import FixedHighlighterStyle from './FixedHighlighter.css';
import HighlighterMenuList from './HighlighterMenuList';

type Props = {
  rect: DOMRect;
  //   displayedSelector: string;
};

export default function FixedHighlighter({ rect }: Props) {
  return (
    <>
      <style>{FixedHighlighterStyle}</style>
      <div
        id="Fixed-Highlighter-outline"
        style={{
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        }}
      ></div>

      <div
        id="Fixed-Highlighter-label"
        style={{
          top: rect.top + rect.height + 8,
          left: rect.left,
        }}
      >
        {<HighlighterMenuList />}
      </div>
    </>
  );
}
