/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');
// const {google} = require('googleapis');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
 


    // JULIA TESTING
    WA.room.onEnterLayer('clockZone').subscribe(() => {
        
        currentPopup = WA.ui.openPopup("clockPopup","Hello This is Julia's test",[{
            label: "Wikipedia",
            className: "primary",
            callback: () => {
                // Close the popup when the "Close" button is pressed.
                WA.ui.website.open({
                    url: "https://docs.google.com/presentation/d/e/2PACX-1vQpL6p-ofcShZ8HKzniDbHuZeGtL7C1nKEMFii7iDvnUnP2MyYwgIuPdYFoxIoY2EruuJYm74jqM4NE/embed?start=false&loop=false&delayms=3000",
                    position: {
                        vertical: "middle",
                        horizontal: "middle",
                    },
                    size: {
                        height: "50vh",
                        width: "50vw",
                    },
                });
                
            }
        }]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // WA.room.onEnterLayer("test_user_registration").subscribe(() => {
    //     console.log(WA.player.name);

        
    //     (async () => {
    //         const auth = new google.auth.JWT({
    //           email: "test-wa@premium-silicon-305117.iam.gserviceaccount.com",
    //           key: "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCl1ARYgWjvXRFrrJl953+Z0cG2GlJqoCYi+RYFw+qCIn7j02V663JMls+Zo0vnx+gF3a1GIld85M7vmw9dvIWxCjLiCUOjwpbTGxvKfPmZWjHk8e0C4GyJsAwoQ0zSbsr9+hKdIudoydXSbJYjaoNnO7fweOkVJVGoX7BaMq3pOd/q6cL723VEhH3Y9OjPxu5qmugBsss2Rwe5WldoLAtB+7SQgV93JHGV/tjlrfz+inGQL5XHGsGA9HUZtKlZ1kHWrirVU8yiKKD0+tT0wJMqBGHjwn1XRXBLaEU1NBOPvS/dT8PD1Le9moIJ83N44fQ9Shmf8kWjz3oeqo55V7a5AgMBAAECggEANXCd9ee+aWUUuB5nWKvB81AlnQnehX4WzC55amI4sLdtLP5zNamqrAPt4xU84PULUNiffnqSty0FgzH1Qb//VY5z12Qk6CFNebrCuf6McV8ftShBuSuZzsVtJYyKtUX/JNnyJbGZ4aspvSZBPCiXMC2OmXBdrPLZ3ej4bBjo8r+vFMLG8S7zosurVOWySJC7XiAGsq7zv98sienmQhSZ6LMnX7BS4sYpwGi1w/0E80ME0kMPFH0V/ikochKdB56rP4v1vI3wxEutjzBmS16V2ExYSLc2X9dWdJDIPbEQti3n71EY5hRwdEkRG/BzKya9Z10VrRV+d++hdW8KZy7iAQKBgQDSp7cIrhh+hqecnv9EiAiRLMJ6qCiX4B+QQT8OIM3TWkT6/k6vS0AaezmOgakheuaQS8VmrR03wbMwMgaeMqj7bgEwGZZLoqJcWzUNxzD/83wKrcgahOFQPdA6iU1zTw8TEC2BIXXz6qJME9B4l/H5QfP0rL4cZnx8rYmvmaZxxwKBgQDJhhWwXWYzz7aySUSulIHOtcF73MSxN6uVOcYlD5NoCOm65Oq0mDHDoYdZXTKE0eUjuXVqjKewl7OdAuQp3YgyphEumx0mA3JFDP9PwzkQOHIH1At2tkwxwFF8iEwTXWZgtrioXY3QIWZNj7e+CPZ4e8qLOgzYZeFr7Qyz8BCTfwKBgQCGIei4DDLojdE4Nz2PY5cg6YFEHMMMQdeXQRRnaJfmljoKH9f2YlIFCqWRihopiVo6UyT0xhIuqJXygEgaf2N+BYOYHxLGQl5jtGfJyCX5NA6ttg4OZMIbF+D5BOheHd8ZYlm3OZkjoSmKi6tYvleDQW2XRE8hQljOAqoDODD1jQKBgHmM134mB6QOkAqfKL8IMfdlJ4u3ECg4BNUgIMRvzaA9aATjWDGPbsypnAKptPPpygSvMwQOTIK2LY7xlH8v8JtkEQ8EXiN0hrLhcQlCHiQLd7QDENsMf46uijfL2d8AQeTpsR1UOFomGxeDLPeBXnAzcmphnCfV445+T2Ak10qvAoGAWpHJZMV14O3UE/3lG+W2cWl19g1uf+3uG0YafvLVZ+Fvdl1vrE3wjKgcjqlEcCR8PaYzNMvnkOeobnXKF5l6vfjnzu9NTaPCMSP09fDREPgsM6bWLmuS47DQCaJBYGEg0xF+vKJlkLNixA9OMmxFcVnz3fzFVu9p4TjOT0MQ8G8=",
    //           scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    //         })
    //         const sheet = google.sheets("v4")
    //         await sheet.spreadsheets.values.append({
    //           spreadsheetId: "1bA6dVnPjykw7T-l-j5OnBKVyErjU5MtJ7_65DO20VN8",
    //           auth: auth,
    //           range: "Sheet1",
    //           valueInputOption: "RAW",
    //           requestBody: {
    //             values: [["hello", "world"]]
    //           }
    //         })
    //       })()
    // });
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
