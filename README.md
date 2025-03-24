# API Endpoints Documentation

## Auth Routes
- **`POST /auth/signup`** → User Signup
- **`POST /auth/login`** → User Login
- **`POST /auth/reset`** → Request Password Reset Link
- **`GET /auth/reset/:_id`** → Render Reset Password Page
- **`POST /auth/reset/:_id`** → Handle Password Reset

## Task Management Routes
- **`GET /tasks`** → Fetch All Tasks for Current User
- **`GET /tasks/:_id`** → Fetch a Specific Task by ID
- **`POST /tasks`** → Create a New Task
- **`PUT /tasks/:_id`** → Update an Existing Task
- **`DELETE /tasks/:_id`** → Delete a Task  

# Environment Setup
### Clone the Repository
```bash
git clone https://github.com/thakkarnetram/task-manager-server.git
cd task-manager-server
```

### Install the dependencies 
```bash
npm install
```

### Create ENV file 
#####  Refer the .env.example file
```
ATLAS_URI=mongodb://127.0.0.1:27017/test-database
SECRET_KEY=
GMAIL_ID=
GMAIL_PASS=
ROOT_URL=http://localhost:8082
```

### Run the script
```npm run dev```

### Check the Log
```
Server fired up on PORT : 8082
Connected to DB 
```
