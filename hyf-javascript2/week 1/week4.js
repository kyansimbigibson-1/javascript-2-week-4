let myarray =["the_chemisty","think_and_grow_rich","python_cookbook","rich_poor_dad","troy","jon_ducket_js","jon_ducket_html","the_great_phylosohpors","romeojuliet","david_copperfield"]
console.log(myarray);
// function ourMap(myarray){
//     let emptyarr = []
//     for(let i =0; i< myarray.length; i++){
//         emptyarr.push(myarray[i] )
//     }
//     return emptyarr;
//  }
//  const ourArray =[1,2,3,4,5]
 
//  console.log(ourArray.map(function(e))
 for (let index = 0; index < myarray.length ; index ++) {
     const element = myarray[index];
    console.log(element);
     
 }   
//  let books=function(){
//      console.log(books);
     
//  }
//  console.log(books);
 
 myarray.forEach(function(books,index){
     //console.log("books");
     console.log(`book ${index+1} --${books}`);
     
 })
 console.log("Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.");
 let object={
     the_chemisty:{
         title:"long_journey",
        language:"english",
        author: "gibson"
     },

     think_and_grow_rich:{
        
            title:"american",
           language:"english",
           author: "berga"
        
     },
     python_cookbook:{
        title:"javascript",
       language:"english",
       author: "gibe"
    },
rich_poor_dad:{
    title:"rosevelt_my_gal",
   language:"english",
   author: "athina"
},
troy:{
    title:"best_movie",
   language:"english",
   author: "jason"
},
jon_ducket_js:{
    title:"read_me",
   language:"english",
   author: "jon"
},
jon_ducket_html:{
    title:"skelton",
   language:"english",
   author: "ducket"
},
the_great_phylosohpors:{
    title:"grt_greeks",
   language:"english",
   author: "stephanos"
},
romeojuliet:{
    title:"long_journey",
   language:"english",
   author: "gibson"
},
david_copperfield:{
    title:"2002",
   language:"english",
   author: "cherlsedickens"
}

    }
    
    
    console.log(object);
    console.log("Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.");
    console.log(object.david_copperfield.title);
    console.log(object.romeojuliet.title);
    let myobj = {
        
    }

     
 
 
 
 