# danielle-sql-employee-tracker
This CLI project was made to keep track of employees in the workplace, though not completed,at this time  you should be able to view all departments, roles, and employees (see seed.sql for examples). I ran into an issue where an empty role is created when you try to add a new employee, and once a new employee is created they won't show up in "view all employees". I had tried numerous different things, from editing my schema.sql, the seed.sql, to the server.js thinking it may have been that I used the incorrect ID, or a typo. 


## Installation
To recreate something similar to this you will need the following packages installed:
    "inquirer": "8.2.4",
    "dotenv": "16.3.1",
    "express":"4.18.2",
    "mysql2": "3.6.1"


## Usage
The idea of this project allows you to edit employee, role, department, employees' manager, and salary to match your workplace. I have Inquierer installed which it allows input for certain options such as adding a new employee, role, and department. I also had implemented lists for some of the other menu options to make navigation easer for the user. More work needs to be done to have it be fully funtional (as mentioned above).

[Where to watch a video example](https://drive.google.com/file/d/1_nHtCTtnBOyj9uK1yIkVdGxCMSNc70cr/view?usp=sharing)

## License
MIT License

Copyright (c) [2023] [danielle-sql-employee-tracker]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
