import { FC } from "react";
import AddCard from "../components/AddCard";
import { projectsData } from "../data/data";
import ProjectCard from "../components/ProjectCard";
import { Box } from "@mui/material";

const AddressPage: FC = () => {

  return (
    <Box
      sx={{
        display: "flex",
        justifySelf: "center",
        flexWrap: "wrap",
        columnGap: "30px",
        rowGap: "30px",
        padding: "30px 100px",
      }}
    >
      {projectsData.map((project) => (
        <ProjectCard
          name={project.name}
          logo={project.logo}
          transactionCount={project.transactionCount}
          transactionTarget={project.transactionTarget}
          bridgedAmount={project.bridgedAmount}
          bridgedTarget={project.bridgedTarget}
          updateTime={project.updateTime}
          key={project.name}
          method={project.method}
        />
      ))}
      <AddCard />
    </Box>
  );
};

export default AddressPage;
