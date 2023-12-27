import React from 'react';
import BasicCard from '../../atoms/Cards/BasicCard';
import DescriptionCard from '../../atoms/Cards/DescriptionCard';
import './profileItem.css';
const ProfileItem = ({profile}) => {
    return (
        <div className="profile-item">
            <img src='https://i.pravatar.cc/300' alt="Avatar" className="profile-item__image" />
            <h3 className="profile-item__name">{profile.first_name + ' ' + profile.last_name}</h3>               
            <span className='address-item'>{profile.address}</span>
            <DescriptionCard title="Bio" description={profile.bio} />                        
        </div>
    );
};

export default ProfileItem;
