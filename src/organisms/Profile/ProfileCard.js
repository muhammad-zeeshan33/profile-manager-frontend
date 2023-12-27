import React from 'react';
import ProfileItem from '../../molecules/Profile/ProfileItem';
import { useProfileContext } from '../../contexts/profileContext';
import ProfileService from '../../services/Profile/ProfileService';
import Loader from '../../atoms/Loader/Loader';
import NoData from '../../atoms/NoData/NoData';
import './profileCard.css';
const ProfileCard = () => {
    const { profile, setProfile } = useProfileContext();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        ProfileService.getProfile().then((profile) => {
            setProfile(profile);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [setProfile]);
    
    if (loading) {
        return <Loader />;
    }

    if (!profile) {
        return <NoData/>;
    }
    
    return (
        <div className="profile-card">            
            <ProfileItem profile={profile} />           
        </div>
    );
};

export default ProfileCard;
