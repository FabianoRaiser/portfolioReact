import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillCard } from "./SkillCard";
import {hard, soft} from "@/mocks/skills.json"
import { StyledSkills } from "./styles";

export const Skills = () => {
  return (
    <StyledSkills>
      <SkillCard label="Hardskills" textSkills={hard}>
        <li>
          <FontAwesomeIcon icon={faHtml5} size="3x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} size="3x" alt/>
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} size="3x" />
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} size="3x" />
        </li>
      </SkillCard>
      <SkillCard label="Softskills" textSkills={soft}/>
    </StyledSkills>
  );
};
