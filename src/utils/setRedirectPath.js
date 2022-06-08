function setRedirectPath({ user, endPath = '/' }) {
  if (user.auth && user.auth.roles[0].name === 'admin') {
    return '/admin/access';
  } else if (user.auth && user.auth.roles[0].name === 'operator') {
    return '/admin/data-reference/biomarkers';
  } else if (user.auth && user.auth.roles[0].name === 'user') {
    return '/home/overview';
  } else {
    return endPath;
  }
}

export default setRedirectPath;
