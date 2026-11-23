# Student Task Manager
Open index.html in a modern browser. Add, complete and delete tasks. Tasks are saved in the current browser using localStorage; they are not shared between users or devices. Clearing browser data may remove them. Do not enter sensitive information.

Run the automated tests with Node.js 20 or later: `node --test tasks.test.js`.

Challenge: add a filter for All, Pending and Completed. Acceptance: All shows every task; Pending shows only incomplete tasks; Completed shows only completed tasks; switching filters does not alter saved data. Add a test for any new pure logic.

GitHub Actions runs tests after a pull request is merged into main. When tests pass, the deployment workflow publishes the site to GitHub Pages. View the runs under Actions and open https://kgrai.github.io/TaskManager/. A pull request closed without merging and direct pushes do not trigger these workflows.
