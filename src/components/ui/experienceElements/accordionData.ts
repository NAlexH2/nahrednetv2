export interface AccordionItem {
  id: number;
  title: string;
  content: string;
  dates: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 0,
    title: "Portland State University - Technical Course Support Specialist",
    dates: "April 2021 - Present",
    content: `
    <div class="px-6 mt-5">
      Facilitated introductory programming labs into the field of Computer 
      Science for first year students as a peer educator helping students learn
      how to execute their first program to building abstract data types by
      practicing in the lab environment and providing meaningful constructive 
      feedback.
    </div>
    
    <div class="px-6 mt-5">
      Performed training for new hires over a 10-week period each term to enable
      smooth and successful integration in the team as well as working with
      students through open conversations and role-playing as students with 
      broken
      code.
    </div>
    
    <div class="px-6 mt-5">
      Created new course materials for all students to use and practice with in
      the Computer Science program for their first year of lower division 
      courses.
    </div>
    `,
  },
  {
    id: 1,
    title: "United States Navy - Electronics Technician, 2nd Class (E-5)",
    dates: "February 2012 - February 2020",
    content: `
    <div class="mt-7 text-2xl font-medium">USS Theodore Roosevelt:</div>
    <div class="mt-1 ml-5 text-xl font-medium">February 2013 - February 2017</div>
    <div class="px-6 mt-5">
    Manager of three maintenance work centers involving tracking and performing 
    maintenance on dozens of large systems with hundreds of maintenance action 
    items for each system to maintain external radio communications on-board the
    ship.
    </div>

    <div class="px-6 mt-5">
    Created and executed meticulous inventory systems for 40,000 ships technical
    documentation to enable accurate and time saving maintenance for countless 
    person-hours.
    </div>
    

    <div class="AccordionHR"></div>

    <div class="text-2xl font-medium">Commander Fleet Activities Sasebo, Japan:</div>
    <div class="mt-1 ml-5 text-xl font-medium">May 2017 - February 2020</div>
    <div class="px-6 mt-5">
    Tracked, authorized, and issued approved logistical requests and 
    requirements for naval forces for the US, Japan, Australian, Canadian, and
    </div>
    
    <div class="px-6 mt-5">
    Indian naval forces during port visits to the base.
    Conducted helicopter operations in and out of Sasebo, Japan for both VIPs,
    and same day high priority service items to be delivered to ships at sea.
    </div>
  
    <div class="px-6 mt-5">
    Performed weekly Operations Intelligence briefings with command triad and
    high-ranking officers stationed shipside and shore-side maintaining critical
    strategic information within the South Pacific.
    </div>

    `,
  },
];

export default accordionData;
