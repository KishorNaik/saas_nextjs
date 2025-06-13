import Image from "next/image";

interface IUserProfileDisplayProps {
    firstName: string;
    lastName: string;
    imageUrl: string;
    emailAddress:string;
}

const UserProfileDisplay=(props:IUserProfileDisplayProps)=>{

    const {firstName,lastName,imageUrl,emailAddress}=props

    return (
        <>
            <div className="flex gap-4 items-center">
                <Image
                    src={imageUrl}
                    alt={firstName!}
                    width={110}
                    height={110}
                />
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">
                        {firstName} {lastName}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {emailAddress}
                    </p>
                </div>
            </div>
        </>
    )
}

export default UserProfileDisplay;