import { NextPage } from "next";
import makeStyles from "@material-ui/core/styles/makeStyles";

import TypographyDemo from "components/TypographyDemo";
import ColorDemo from "components/ColorDemo";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: "1rem",
    marginTop: -12,
    marginBottom: -12,
    display: "flex",
    flexDirection: "column"
  },
  demoContainer: {
    marginTop: 12,
    marginBottom: 12
  }
});

const Home: NextPage = () => {
  const { container, demoContainer } = useStyles();

  return (
    <div className={container}>
      <TypographyDemo className={demoContainer} />
      <ColorDemo className={demoContainer} />
    </div>
  );
};

export default Home;
