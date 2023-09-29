import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import Azure from "../../assets/Azure.svg";
import { Stack } from "@fluentui/react";

const Layout = () => {

    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <Stack horizontal verticalAlign="center" horizontalAlign="space-between"
                // className={styles.headerContainer}
                >
                    <Stack horizontal verticalAlign="center">
                        <img
                            src={Azure}
                            className={styles.headerIcon}
                            aria-hidden="true"
                        />
                        <Link to="/" className={styles.headerTitleContainer}>
                            <h1 className={styles.headerTitle}>Azure AI Dating Assistant</h1>
                        </Link>
                    </Stack>
                </Stack>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;
