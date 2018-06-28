import React from 'react';
import { css } from 'glamor';

const imgStyle = css({
  width: '100%',
  maxWidth: '100%'
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
            <div className="ncss-row">
              <div className="ncss-col-sm-2 va-sm-t">
                <img className={imgStyle} src={data.appLogo} />
              </div>
              <div className="ncss-col-sm-6 va-sm-t full">
                <h2 className="fs12-sm lh14-sm u-bold">{data.appTitle}</h2>
                <p className="fs12-sm lh14-sm text-color-grey">Available in the App Store</p>
              </div>
              <div className="ncss-col-sm-4 va-sm-t">
                <button 
                  type="button" 
                  className="fs12-sm pt1-sm pr3-sm pb1-sm pl3-sm ncss-btn-border-medium-grey u-rounded"
                >Download</button>
              </div>
              
            </div>

        </div>
      </div>
    </div>
  );
}

