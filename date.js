// date module for exporting the current date and day ;


exports.getDate = () => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long'
    };
    const today = new Date();
    const day = today.toLocaleDateString("en-US", options);
    // for creating dynamic html pages we use templating;
    // res.render search a folder views and find list in it ;
    // now it's gonna search key as kindofday ,it will replace kindofday with day ;
    return day;
};


exports.getDay = () => {
    const options = {
        weekday: 'long'
    };
    const today = new Date();
    const day = today.toLocaleDateString("en-US", options);
    // for creating dynamic html pages we use templating;
    // res.render search a folder views and find list in it ;
    // now it's gonna search key as kindofday ,it will replace kindofday with day ;
    return day;
};
// exports is an object having properties and method to be passed to app.js
