import React, { createContext, useState } from 'react';

// Create the profile context
const ProfileContext = createContext({
    profile: {},
    setProfile: () => {}
});

const ProfileProvider = ({ children }) => {    
    const [profile, setProfile] = useState();

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

const useProfileContext = () => {
    const context = React.useContext(ProfileContext);
    if (context === undefined) {
        throw new Error('useProfileContext must be used within a ProfileProvider');
    }
    return context;
}

export {
    ProfileProvider, 
    useProfileContext
}
