//  promise all/ allsettled / rare  ---> when 2 or more promise working parallely

// - .all : when all get resolved then return all result , even 1 fail --> tell all promise failled 
// .allsettled : give result always atlast , & tell what passed what failed --> passed ka data we acess
//.race : if 3 promise are hit ==> the promise which result get resolved first it return that first rest not return

// *** application
// race --> server hitting --> which server aceess to give uk , in ===> cdn pick
// all --> when dependency --> of one promise to other 
// allSettled --> no dependecy ==> avoid fail response / print fullfill case 