import Project from "@/models/project";
import PortfolioCard from "../portfolio-ui/portfoliocard";
import { getProjects } from "@/data/project-data";

export default function ShowCase() {
  const projects = getProjects().slice(0, 3);

  return (
    <div className="pt-2 pb-2 md:px-10 px-4">
      <div className="text-center text-4xl pb-2">
        Featured Projects:
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 py-2">
        {projects.map((project) => (
          <div key={project.name}>
            <PortfolioCard project={project} customStyle={"md:h-[670px]"} />
          </div>
        ))}
      </div>
    </div>
  );
}
