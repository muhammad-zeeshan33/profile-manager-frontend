import React from 'react';
import ProfileCard from '../../organisms/Profile/ProfileCard';
import { ProfileProvider } from '../../contexts/profileContext';
import Header from '../../atoms/Header/Header';
const ProfilePage = () => {    
    return (
        <ProfileProvider>
            <div className='profile-page'>                
                <Header />
                <ProfileCard />
            </div>
        </ProfileProvider>
    );
};

export default ProfilePage;
