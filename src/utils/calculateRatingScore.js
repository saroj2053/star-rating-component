export const getRatingStatus = function (rating) {
  switch (rating) {
    case 1:
      return "Poor";
    case 2:
      return "Below Average";
    case 3:
      return "Average";
    case 4:
      return "Good";
    case 5:
      return "Excellent";
    default:
      return "";
  }
};
