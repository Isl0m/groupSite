import Avatar from '@mui/material/Avatar';

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
  nameProps: string;
  isMrgin?: boolean;
  isFullName?: boolean;
  img?: string;
}
function stringAvatar(props: IStringAvatar) {
  const {
    nameProps = 'Islom Rustamov',
    isMrgin = true,
    isFullName = false,
  } = props;
  const avatarStyles = isMrgin
    ? {
        bgcolor: stringToColor(nameProps),
        marginTop: '10vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 100,
        height: 100,
        fontSize: '2.5rem',
      }
    : {
        bgcolor: stringToColor(nameProps),
        width: 75,
        height: 75,
        fontSize: '2rem',
      };

  if (!nameProps) {
    return {
      sx: avatarStyles,
    };
  }
  const children = isFullName
    ? `${nameProps.split(' ')[0][0]}${nameProps.split('.')[0].split(' ')[1]}`
    : `${nameProps.split(' ')[0][0]}${nameProps.split(' ')[1][0]}`;
  return {
    sx: avatarStyles,
    children: children,
  };
}

function getAvatarStyle(type: boolean | undefined) {
  if (!type)
    return {
      marginTop: '10vh',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: 150,
      height: 150,
    };
  else
    return {
      width: 75,
      height: 75,
    };
}
export default function BackgroundLetterAvatars(props: IStringAvatar) {
  if (props.img)
    return <Avatar src={props.img} sx={getAvatarStyle(props.isMrgin)} />;
  else return <Avatar {...stringAvatar(props)} />;
}
