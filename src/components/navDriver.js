// import styles from "@/styles/styles.module.css";
// import { Index, Skills, Projects, Contact } from "@/pages";

// const index = "index";
// const skills = "skills";
// const projects = "projects";
// const contact = "contact";

// export class NavDriver extends React.Component {
//   constructor(props) {
//     super(props);
//     this.currentPage = "";
//   }

//   setCurrentPage(newPage) {
//     this.currentPage = newPage;
//   }

//   NavButtons = () => {
//     const setToCurrentNavStyle = (toChange) => {
//       return this.currentPage == toChange ? styles.currentnav : styles.navtext;
//     };

//     return (
//       <span className={`${styles.mynav} flex justify-center`}>
//         <button
//           id={setToCurrentNavStyle(index)}
//           onClick={() => this.setCurrentPage(index)}
//         >
//           Bio
//         </button>
//         <button
//           id={setToCurrentNavStyle(skills)}
//           onClick={() => this.setCurrentPage(skills)}
//         >
//           Skills
//         </button>
//         <button
//           id={setToCurrentNavStyle(projects)}
//           onClick={() => this.setCurrentPage(projects)}
//         >
//           Projects
//         </button>
//         <button
//           id={setToCurrentNavStyle(contact)}
//           onClick={() => this.setCurrentPage(contact)}
//         >
//           Contact
//         </button>
//       </span>
//     );
//   };

//   renderContent() {
//     if (this.currentPage == index) {
//       return <Index />;
//     } else if (this.currentPage == contact) {
//       return <Contact />;
//     }
//   }
// }

// export default NavDriver;
