import { projects } from "@/utils/data";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
    return (
        <section className={"projects"}>
            <div className="container mx-auto">
                <h2>My Projects</h2>

                <table className="table-auto projects-table">
                    <thead>
                        <tr>
                            <th className={"table-title"}><p>Title</p></th>
                            <th className={"table-title technologies-title px-4"}><p>Technologies</p></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p,i) => {
                            return (
                                <tr className={"project"} key={i} data-cursor-img={`/images/projects/${p.imgSrc}`}>
                                    <td className={"name"}>
                                        <div className={"year"}>
                                            {p.year}
                                        </div>
                                        <a href={p.href}>
                                            <p>{p.name}</p>
                                        </a>
                                    </td>
                                    <td className={"px-4"}>
                                        <a href={p.href}>
                                            <div className={"technologies"}>
                                                {p.technologies.map((t,i) => (<div className={"technology"} key={i}>{t}</div>))}
                                            </div>
                                        </a>
                                    </td>
                                    <td className={"arrow-box"}>
                                        <a href={p.href}>
                                            <div className={"arrow"}>
                                                <FaArrowRight />
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Projects;