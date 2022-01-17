const user = {
    firstName : 'josh',
    lastName : 'makentosh'
};

function FormatName(username) {
   return 'Hello ' + username;
};

function GetGreeting(props) {
   console.log("props of GetGreeting:", props);
   if (true) {
     return(
         <div className="lesson-2">
             <h1>Lesson2: Working with props</h1>
             <h1>{FormatName(props.user)} !</h1>
             <p>This is getGreeting component. Your mail is {(props.mail)}</p>
         </div>
     );
   }
   return <h1>Hello, Stranger.</h1>;
};


export default GetGreeting;