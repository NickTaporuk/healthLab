import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawers from './../components/Drawers/Drawers';
import Header from './../components/Header/Header';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    height: 1920,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    paddingTop: 60,
    height: 'calc(100% - 56px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
    },
  },
});

export default (ComposedComponent) => {
  class Dashboard extends Component {
    render() {
      const { classes, theme } = this.props;

      return (
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <Header />
            <Drawers />
            <main className={classes.content}>
              <ComposedComponent {...this.props} />
            </main>
          </div>
        </div>
      );
    }
  }

  Dashboard.displayName = `Dashboard(${ComposedComponent.displayName || ComposedComponent.name || 'ComposedComponent'})`;

  const mapStateToProps = state => ({});

  const mapDispatchToProps = dispatch => ({});

  return connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Dashboard));
};
