export const getTextColor = function (rating) {
  switch (rating) {
    case 1:
      return "rgb(248 113 113)";
    case 2:
      return "rgb(251 146 60)";
    case 3:
      return "rgb(250 204 21)";
    case 4:
      return "rgb(74 222 128)";
    case 5:
      return "rgb(34 197 94)";
    default:
      return "";
  }
};
