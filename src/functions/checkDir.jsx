const rightDirs = ["fa", "ar"];

export const cheackDir = (dir) => {
  if (rightDirs.includes(dir)) {
    return true;
  } else {
    return false;
  }
};