import { useTheme } from '@mui/material';
import { Circle, UserLogoContainer, Username } from './UserLogoWrapper';

interface UserLogoProps {
  username: string;
  isOpen: boolean;
  imageUrl?: string;
}

const UserLogo: React.FC<UserLogoProps> = ({ username, isOpen, imageUrl }) => {
  const firstLetter = username.charAt(0).toUpperCase();
  const theme = useTheme();
  return (
    <div>
      <UserLogoContainer>
        <Circle
          style={{
            backgroundColor: theme.palette.error.dark,
            color: theme.palette.background.default,
          }}
        >
          {imageUrl ? <img src={imageUrl} alt={username} /> : firstLetter}
        </Circle>
        <Username title={username} $isOpen={isOpen}>
          {username}
        </Username>
      </UserLogoContainer>
    </div>
  );
};

export default UserLogo;
