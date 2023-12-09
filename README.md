# live link:https://hostel-management-a7294.web.app/
Visual Appeal and Customization

### Ensure a visually appealing design with pleasing color contrast.
Avoid "gobindo design" and customize components for a unique look.
Explore component libraries, including DaisyUI, while maintaining a distinct project identity.
Consistent Navigation

# Implement a navbar and footer on all pages (except 404-page).
Navbar includes Website logo, Website name, Home, All Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile.
Navbar dynamically displays user-specific options based on login status.
User Authentication

# Implement secure login and registration systems.
Display relevant error messages on login and registration pages.
Allow login via Email/Password and Google Sign-in.
Registration page includes fields for Name, Email, Password, and Photo URL.
Home Page

# Banner section with a slider, meaningful content, and a search input field.
Job by category section with a tab system showcasing various job types.
Each tab displays jobs with details such as the poster's name, job title, posting date, deadline, salary range, applicants' count, and a View Details button.
Blogs Page

# access tokens, refresh tokens, Express.js, and Nest JS.
Provide informative content in an engaging blog format.
All Jobs Page

# Display all posted jobs in a tabular form with details.
Implement a search system based on the job title.
Secure View Details button to redirect non-logged-in users to the login page.
Single Job Details Page

# Private route accessible after login.
Display job details, including company logo, job banner, title, description, salary range, number of applicants, and an Apply button.
Apply button opens a modal with auto-filled user information and an input field for submitting the resume link.
Validate application submission based on the deadline and prevent employers from applying to their own jobs.
Add A Job Page

# Private route accessible to logged-in users.
Form includes fields for Job Banner URL, Job Title, Logged-In User Name, Job Category, Salary Range, Job Description, Job Posting Date, and Application Deadline.
My Jobs Page

# Private route displaying jobs added by the logged-in user.
Tabular form with options to update or delete each job.
Applied Jobs Page

# Private route displaying jobs the user has applied for.
Implement a filter system based on job category.
404 Page

# Create an engaging 404 page with an interesting image/gif and a Back to Home button.
Security and Notifications

# Implement JWT for secure routes.
Display relevant toast or notifications for CRUD operations.
Bonus Features

