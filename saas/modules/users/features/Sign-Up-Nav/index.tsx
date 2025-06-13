import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

const SignUpNav = () => {
    return (
        <>
            <SignedOut>
                <SignInButton>
                    <Button className="btn-signin">Sign In</Button>
                </SignInButton>
                {/*<SignUpButton />*/}
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
};

export default SignUpNav;