import { Button } from '@/components/ui/button';
import { useFollow } from '@/hooks/useFollow';
import { UserPlus, UserMinus } from 'lucide-react';

interface FollowButtonProps {
  userId: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'secondary';
}

const FollowButton = ({ userId, size = 'sm', variant = 'outline' }: FollowButtonProps) => {
  const { followUser, unfollowUser, isFollowing } = useFollow();
  const following = isFollowing(userId);

  const handleClick = () => {
    if (following) {
      unfollowUser(userId);
    } else {
      followUser(userId);
    }
  };

  return (
    <Button size={size} variant={following ? 'secondary' : variant} onClick={handleClick}>
      {following ? (
        <>
          <UserMinus className="h-4 w-4 mr-2" />
          Unfollow
        </>
      ) : (
        <>
          <UserPlus className="h-4 w-4 mr-2" />
          Follow
        </>
      )}
    </Button>
  );
};

export default FollowButton;