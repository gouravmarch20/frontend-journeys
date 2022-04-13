// Asyc & defer

/*

-both are boolean attribute , which can be load along wiht script tag
-//? use to load external script 
-//? head tag , body tag where they include
*/
/*
without async & defer 

in head tag script written : html parsing going , it trigger script tag =>  it will  block reset code it will fetch & executed the script tag module code and  then  below code run 

in body tag : it will run after the complete html parsing  completed even script tag written just bellow body tag 

*/

/*
with asyc

 html parsing happing , the moment it hit script tag ==> the html parsing not  stop , script fetching done in paraller after fetching  module code it pasused the html parser & execute the  script code and then start html parsing  



/*
defer 

header : html parsing happing , the moment it hit script tag ==> script fetching keep happing but the html parsing never stop ===> not script code execution will start after complete html parsing
*/
// ! appliction ==> perfomance optimization
// ? async : if multiple script & dependent , 
// ? defer  : if multiple script which are depend on each ohter , execution happen one by one
