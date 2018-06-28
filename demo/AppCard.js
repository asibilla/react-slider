import React from 'react';
import { css } from 'glamor';

const imgStyle = css({
  width: '100%',
  maxWidth: '100%'
});

const footerBorder = css({
  boxShadow: 'inset 0 0 0 0 #ddd, inset -1px 0 0 0 #ddd, inset 0 -1px 0 0 #ddd, inset 1px 0 0 0 #ddd',
  WebkitBoxShadow: 'inset 0 0 0 0 #ddd, inset -1px 0 0 0 #ddd, inset 0 -1px 0 0 #ddd, inset 1px 0 0 0 #ddd'
});

export class AppCardData {
  constructor(
    appLogo = null,
    appTitle = '',
    image = null,
    title = '',
    subtitle = '',
    footer = ''
  ) {
    this.appLogo = appLogo;
    this.appTitle = appTitle;
    this.image = image;
    this.title = title;
    this.subtitle = subtitle;
    this.footer = footer;
  }
}

export const AppCard = ({
  data
}) => {
  return (
    <div className="ncss-container">
      <div className="ncss-row">
        <div className="ncss-col-sm-12 p4-sm border-medium-grey">
          
          <div className="ncss-row mb3-sm">
            <div className="ncss-col-sm-2 va-sm-t">
              <img className={imgStyle} src={data.appLogo} />
            </div>
            <div className="ncss-col-sm-6 va-sm-t full">
              <h2 className="fs12-sm lh14-sm u-bold">{data.appTitle}</h2>
              <p className="fs12-sm lh14-sm text-color-grey">Available in the App Store</p>
            </div>
            <div className="ncss-col-sm-4 va-sm-t ta-sm-r">
              <button 
                type="button" 
                className="fs12-sm pt1-sm pr3-sm pb1-sm pl3-sm ncss-btn-border-medium-grey u-rounded"
              >Download</button>
            </div>
          </div>

          <div className="ncss-row mb3-sm">
            <div className="ncss-col-sm-12">
              <img className={imgStyle} src={data.image} />
            </div>
          </div>

          <div className="ncss-row mb4-sm">
            <div className="ncss-col-sm-12">
              <h1 className="fs12-sm lh14-sm">{data.title}</h1>
              <p className="fs12-sm lh14-sm text-color-grey">{data.subtitle}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="ncss-row">
        <div className={`${footerBorder} ncss-col-sm-12 p4-sm`}>
          <p className="fs12-sm u-bold">{data.footer}</p>
        </div>
      </div>
    </div>
  );
}

