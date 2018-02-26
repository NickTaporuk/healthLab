

<Drawer
  variant="permanent"
  classes={{
    paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
  }}
  open={this.state.open}
>
  <div className={classes.drawerInner}>
    <div className={classes.drawerHeader}>
      <IconButton onClick={this.handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <MenuList />
  </div>
</Drawer>
