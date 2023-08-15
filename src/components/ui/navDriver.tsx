import React, { useState } from 'react';
import { styles } from "styles";
import PageRender from "./pageRender"

const beard = "images/beard.svg";
const index = "index";
const skills = "skills";
const projects = "projects";
const contact = "contact";

const NavDriver = () => {
    const [currentPage, setCurrentPage] = useState(index); // 'home' or 'contact'

    const setCurrentNav = (toChange: string) => {
        return currentPage === toChange ? styles.currentnav : styles.navtext;
    };

    return (
        <div>
            {/* Change button to link and lets get onClick working */}
            <button
                id={styles.imagenavtext}
            >
                <img id={styles.mynavlogo} src={beard} alt="website logo" />
                Alex Harris
            </button>
            <span className={`${styles.mynav} flex justify-center`}>
                <button id={setCurrentNav(index)} onClick={() => setCurrentPage(index)}>
                    Bio
                </button>
                <button
                    id={setCurrentNav(skills)}
                    onClick={() => setCurrentPage(skills)}
                >
                    Skills
                </button>
                <button
                    id={setCurrentNav(projects)}
                    onClick={() => setCurrentPage(projects)}
                >
                    Projects
                </button>
                <button
                    id={setCurrentNav(contact)}
                    onClick={() => setCurrentPage(contact)}
                >
                    Contact
                </button>
            </span>

            <main>{PageRender(currentPage)}</main>
        </div>
    )
}

export default NavDriver;