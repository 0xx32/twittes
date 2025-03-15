import React from 'react'

interface ProfileContextProps {
	profile: Profile
	setProfile: (profile: Profile) => void
}

export const ProfileContext = React.createContext<ProfileContextProps>({
	profile: undefined!,
	setProfile: () => {},
})
