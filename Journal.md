# Journal
Created a vault function that checks if a key is correct. I also used strict mode to help catch mistakes and prevents errors

created two custom error classes to explain why a key was rejected. Throwing errors helps identify problems instead of just returning an access denoed message

added try, catch, and finally to handle errors. The catch block handles errors, while the finally block runs every time. This helps keep the program running even when someone enters an inncorrect key