import Project from "@/models/project";
import PortfolioCard from "@/components/portfolio-ui/portfoliocard";
import { getProjects } from "@/data/project-data";

export default function Portfolio() {

  const projects = getProjects();

  return (
    <>
      <div className="max-w-full min-h-full md:mt-4 mt-2 md:px-16 px-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5">
          {projects.map((project) => (
            <div key={project.name}>
              <PortfolioCard project={project} cardHeight={project.sizeMD} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
