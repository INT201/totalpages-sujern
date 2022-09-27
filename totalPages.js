const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(rowsPerPage == null || undefined){
    
    return 1
  }
  else if(arrayItems == null || undefined){
    
    return undefined
  }
  else{
    page = arrayItems.length/rowsPerPage
    if(page != Infinity){
      return Math.ceil(page)
    }
    else{return 1}
   
  }
}
module.exports = totalPages
