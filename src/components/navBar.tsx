import { styles } from "../styles";

const beard = "../images/beard.svg";

const NavBar = () => {
    return (
        <>
            {/* Change button to link and lets get onClick working */}
            <button
                id={styles.imagenavtext}
            >
                <img id={styles.mynavlogo} src={beard} alt="website logo" />
                Alex Harris
            </button>
        </>
    )
}

export default NavBar;