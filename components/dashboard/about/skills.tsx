import { Button } from "@/components/ui/button";
import { skillsData } from "@/lib/data";

function Skills() {
  return (
    <section className="space-y-6">
      <div className="space-y-4 text-2xl font-semibold">
        <h3>Programming</h3>
        <div className="flex flex-wrap gap-2">
          {skillsData[0].skills.map((skill) => (
            <Button variant={'secondary'} key={skill}>{skill}</Button>
          ))}
        </div>
      </div>
      <div className="space-y-4 text-2xl font-semibold">
        <h3>Networking</h3>
        <div className="flex flex-wrap gap-2">
          {skillsData[1].skills.map((skill) => (
            <Button variant={'secondary'} key={skill}>{skill}</Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
