const blogdatavalidation = ( title, textbody ) => {
  return new Promise((resolve, reject) => {
    if (!title) reject("title is missing");

    if (!textbody) reject("textbody is missing");
    if (title.length < 3 && title.length > 100) {
      reject("Length of title should be in between 3 and 100");
    }
    if (textbody.length < 3 && textbodylength > 1000) {
      reject("Length of title should be in between 3 and 1000");
    }
    resolve();
  });
};

module.exports=blogdatavalidation;