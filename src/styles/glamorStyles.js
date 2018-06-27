import { css } from 'glamor';

export const view = css({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
});

export const slidesDiv = css({
  width: '100%',
  overflow: 'scroll',
  WebkitOverflowScrolling: 'touch',
  overflowScrolling: 'touch'
});

export const slide = css({
  display: 'inline-block',
  verticalAlign: 'top'
});

export const arrowContainer = css({
  position: 'absolute',
  width: '30px',
  height: '100%',
  top: '0',
  cursor: 'pointer',
  zIndex: '1'
});

export const arrowContainerLeft = css({
  left: '0'
});

export const arrowContainerRight = css({
  right: '0'
});

export const arrow = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  fontSize: '25px',
  transform: 'translate(-50%, -50%)',
});

