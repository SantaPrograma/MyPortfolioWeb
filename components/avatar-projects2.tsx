"use client"

import MotionTransition from "./transition-component";
import Image from "next/image";

const AvatarProjects2 = () => {
    return (
        <div>
            <MotionTransition position="bottom" className="fixed bottom-0 left-0 hidden md:inline-block">
                <Image src="/avatar-3.png" width={300} height={300} className="w-full h-full" alt="AvatarWork"/>
            </MotionTransition>
        </div>
    );
}

export default AvatarProjects2;