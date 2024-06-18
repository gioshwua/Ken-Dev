import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://cphealthinnovations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Junior Software Developer at CP Health Innovations
          </a>{' '}
          | May 2023 - May 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Developed user-friendly front-end interfaces for a collaborative
          health program management system, enhancing efficiency for frontline
          workers. Integrated advanced data analytics tools to monitor and
          evaluate outcomes, providing actionable insights. Conducted user
          testing and feedback to refine the user experience, ensuring an
          intuitive platform. Collaborated with a multidisciplinary team to
          ensure cohesive development. Improved web application performance by
          optimizing code, minimizing dependencies, and implementing lazy
          loading techniques.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Project Based Freelancing</TimelineEvent.Title>

        <TimelineEvent.Description>
          Executed client-commissioned projects, delivering fully developed
          solutions within the agreed timeframe.Specialized in the development
          of web pages using agile methodologies, clean architecture, SOLID
          principles, and ensuring pixel-perfect accuracy in all projects.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Data Entry Specialist at Red Cross Philippines | December 2019
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Utilized Microsoft Excel to ensure the accuracy and efficiency of data
          entry processes. Through my attention to detail and strong
          organizational skills, I successfully maintained and updated large
          volumes of critical information, ultimately contributing to the smooth
          operation of the organization.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
