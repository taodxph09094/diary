export const createSlugFromData = (data) => {
  const day = data?.day;
  const month = data?.month;
  const year = data?.year;

  if (day !== undefined && month !== undefined && year !== undefined) {
    return `${day}-${month}-${year}`;
  }
  return "slug-khong-hop-le";
};

// export const slateDay = [
//   {

//   }
// ]