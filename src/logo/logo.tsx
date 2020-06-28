import React, { ReactElement } from 'react';
import { SvgXml } from 'react-native-svg';

export const Logo = ({
  logo,
  fill,
} : ILogoProps) : ReactElement => {
  const iconSvg = require('../xml')[logo]();

  return (
    <SvgXml
      width="100%"
      height="100%"
      xml={`${iconSvg}`}
      fill={fill}
    />
  );
};

export interface ILogoProps {
  logo : string;
  fill? : string;
}
