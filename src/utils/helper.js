export const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  
  export const truncate = (text, length = 100) =>
    text.length > length ? text.substring(0, length) + '...' : text;
  
  