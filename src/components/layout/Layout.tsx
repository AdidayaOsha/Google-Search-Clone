import { Fragment } from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      {children}
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
