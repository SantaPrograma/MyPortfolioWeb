"use client"

import MotionTransition from "./transition-component";
import Image from "next/image";

const AvatarProjects = () => {
    return (
        <div>
            <MotionTransition position="bottom" className="fixed bottom-0 right-0 hidden md:inline-block">
                <Image src="/avatar-2.png" width={300} height={300} className="w-full h-full" alt="AvatarWork"/>
            </MotionTransition>
        </div>
    );
}

export default AvatarProjects;