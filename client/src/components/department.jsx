import React from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import { NavLink } from 'react-router-dom';


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <div className='allDeptContainer' style={{backgroundColor:"white"}}>
      <h1>Academic Department</h1>
    <Breadcrumbs className='depts' aria-label="breadcrumb" style={{backgroundColor:"white"}}>
    <NavLink exact to = '/' className='anchor' activeClassName='active'>All</NavLink>
    <NavLink exact to = '/engineering' className='anchor' activeClassName='active'>Engineering</NavLink>
    <NavLink exact to = '/science' className='anchor' activeClassName='active'>Science</NavLink>
    <NavLink exact to = '/business' className='anchor' activeClassName='active'>Business</NavLink>
    <NavLink exact to = '/social' className='anchor' activeClassName='active'>Social</NavLink>
    <NavLink exact to = '/education' className='anchor' activeClassName='active'>Education</NavLink>
    <NavLink exact to = '/law' className='anchor' activeClassName='active'>Law</NavLink>
    <NavLink exact to = '/institute' className='anchor' activeClassName='active'>Institute</NavLink>
    </Breadcrumbs>
    </div>
  );
}
