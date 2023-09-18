export interface AccordionItem {
  title: string;
  content: string;
  dates: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Portland State University - Technical Course Support Specialist",
    dates: "April 2021 - Present",
    content: `
    Facilitated introductory programming labs into the field of Computer Science
    for first year students as a peer educator helping students learn how to 
    execute their first program to building abstract data types by practicing 
    in the lab environment and providing meaningful constructive feedback.
    
    Performed training for new hires over a 10-week period each term to enable
    smooth and successful integration in the team as well as working with
    students through open conversations and role-playing as students with
    broken code.
    
    Created new course materials for all students to use and practice with in
    the Computer Science program for their first year of lower division courses. 
    `,
  },
  {
    title: "United States Navy - Electronics Technician, 2nd Class (E-5)",
    dates: "February 2012 - February 2020",
    content: `
    USS Theodore Roosevelt:
    February 2013 - February 2017
    
    Managed, repaired, and handled various customer requests and work center
    duties for external communications equipment repair within several
    communication suites.
    
    Commander Fleet Activities Sasebo, Japan:
    May 2017 - February 2020
    
    Responsible for managing docking and undocking vessels from the bases births
    ensuring safety and comfort 12 homeport ships. Scheduled and managed flight
    operations for various kinds of aircraft for both regular duties and
    distinguished visitors.

    `,
  },
];

export default accordionData;
