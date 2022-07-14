import {
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import MainHeader from "./MainHeader";

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <Fragment>
      <MainHeader />
      <main className="lg:px-32 md:px-20 px-10 mt-6">{props.children}</main>
    </Fragment>
  );
}

export default Layout;
