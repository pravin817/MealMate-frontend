import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import UserProfilePageSkeletonLoader from "@/skeletonLoading/UserProfilePageSkeletonLoader";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading || isUpdateLoading) {
    return <UserProfilePageSkeletonLoader />;
  }

  if (!currentUser) {
    return <span>Unbale to load user profile</span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
