import React from 'react'

export type Profile = User

interface ProfileContextProps {
	profile: Profile
	setProfile: (profile: User) => void
}

export const ProfileContext = React.createContext<ProfileContextProps>({
	profile: undefined!,
	setProfile: () => {},
})
