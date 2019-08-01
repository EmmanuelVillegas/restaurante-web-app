import React from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import SideNav from './SideNav';
import Breadcrumb from './Breadcrumb';

import styles from './styles';

const Layout = ({ children, profile }) => {
  const classes = styles();

  let [mobileOpen, setMobileOpen] = React.useState(false);

  function handleOpenSideNav() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <NavBar handleOpenSideNav={handleOpenSideNav} userProfile={profile} />
      <SideNav open={mobileOpen} handleOpen={handleOpenSideNav} />

      <main className={classes.main}>
        <Breadcrumb />
        {children}
      </main>
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  profile: firebase.profile
});

export default connect(
  mapStateToProps,
  {}
)(Layout);
