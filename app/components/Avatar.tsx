import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
interface IStringAvatar {
  nameProps: string | undefined;
}
function stringAvatar(name: IStringAvatar) {
  const { nameProps } = name;
  if (!nameProps) {
    return {
      sx: {
        bgcolor: stringToColor('Islom Rustamov'),
        marginTop: '10vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 100,
        height: 100,
        fontSize: '2.5rem',
      },
    };
  }
  return {
    sx: {
      bgcolor: stringToColor(nameProps),
      marginTop: '10vh',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: 100,
      height: 100,
      fontSize: '2.5rem',
    },
    children: `${nameProps.split(' ')[0][0]}${nameProps.split(' ')[1][0]}`,
  };
}

export default function BackgroundLetterAvatars(nameProps: IStringAvatar) {
  return <Avatar {...stringAvatar(nameProps)} />;
}
