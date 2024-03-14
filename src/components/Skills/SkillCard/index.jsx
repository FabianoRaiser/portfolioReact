/* eslint-disable react/prop-types */
import { StyledSkillsCard, TecUl, TextUl } from "./styles";

export const SkillCard = ({ children, label, textSkills }) => {
  return (
    <StyledSkillsCard>
      <h3>{label}</h3>
      <div>
        <TecUl>{children}</TecUl>
        <TextUl>
          {textSkills.map((skill) => {
            return <li key={skill.id}>{skill.text}</li>;
          })}
        </TextUl>
      </div>
    </StyledSkillsCard>
  );
};
