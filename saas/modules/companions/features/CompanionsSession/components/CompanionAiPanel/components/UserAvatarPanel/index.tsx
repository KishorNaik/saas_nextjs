"use client";
import Image from "next/image";

interface IUserAvatarPanelProps {
    userName: string
    userImage: string
}

const UserAvatarPanel = (props:IUserAvatarPanelProps) => {
    const {userName,userImage} = props;
    return (
        <>
            <div className="user-avatar">
                <Image src={userImage} alt={userName} width={130} height={130} className="rounded-lg" />
                <p className="font-bold text-2xl">
                    {userName}
                </p>
            </div>
        </>
    )
}

export default UserAvatarPanel;