import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";


const PageAboutMe = () => {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>

                <Avatar/>

                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi
                    <span className="font-bold text-primary"> Trayectoria Profesional</span>
                </h1>

                <TimeLine/>

            </ContainerPage>
        </>
         
    );
}

export default PageAboutMe;