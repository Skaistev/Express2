function capitalize (x){
   
    const b = x.split('');
    const u = b[0].toUpperCase();
    const s = x.slice(1,x.length)
      return u+s
  }
   



export { capitalize }