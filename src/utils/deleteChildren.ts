export const deleteChildren = (parent:HTMLElement) => {
   while (parent.lastElementChild) {
      parent.removeChild(parent.lastElementChild);
   }  
}
