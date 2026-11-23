# Student Task Manager
Open index.html in a modern browser. Add, complete and delete tasks. Tasks are saved in the current browser using localStorage; they are not shared between users or devices. Clearing browser data may remove them. Do not enter sensitive information.

Run the automated tests with Node.js 20 or later: `node --test tasks.test.js`.

Challenge: add a filter for All, Pending and Completed. Acceptance: All shows every task; Pending shows only incomplete tasks; Completed shows only completed tasks; switching filters does not alter saved data. Add a test for any new pure logic.

GitHub Pages: push these files to a GitHub repository, then in Settings > Pages select Deploy from a branch, branch main, folder / (root). Open the published URL after the build completes. Availability depends on repository and account settings. GitHub Actions runs the test on pushes and pull requests when Actions is enabled.
