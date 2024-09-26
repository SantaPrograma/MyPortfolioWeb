import AvatarProjects from "@/components/avatar-projects";
import AvatarProjects2 from "@/components/avatar-projects2";
import ContainerPage from "@/components/container";
import ProjectBox from "@/components/project-box";
import TransitionPage from "@/components/transition-page";
import { dataProjects } from "@/data";

const ProjectsPage = () => {
    return (
        <div>
            <ContainerPage>
                <TransitionPage/>
                <AvatarProjects/>
                <AvatarProjects2/>

                <div className="flex flex-col justify-center h-full">

                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Mis últimos <span className="text-primary font-bold">Proyectos Realizados</span>
                    </h1>

                    <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-3">
                        {dataProjects.map((data) => (
                            <ProjectBox key={data.id} data={data}/>
                        ))}
                    </div>

                </div>

            </ContainerPage>
        </div>
    );
}

export default ProjectsPage;