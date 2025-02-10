# **AAAMB Entry-Level JavaScript Technical Test**

## **Overview**

### **Objective**  
Develop a **Personal Task Manager** where users can manage their daily tasks efficiently. The test evaluates JavaScript proficiency, UI development skills, and problem-solving abilities. The candidate can choose to implement the project using **Vanilla JavaScript, React, or Angular**.

---

## **Project Requirements**

### **1. Core Features (Mandatory)**  

Develop a **Personal Task Manager** with the following functionalities:

1. **Add a Task**  
   - Fields: **Title (Required), Description (Optional), Due Date (Required, cannot be past), Status (To Do, In Progress, Done)**.
   - Clicking "Add Task" should save the task.

2. **View Tasks**  
   - Display tasks in a list or table.
   - Show **Title, Status, Due Date, Description**.

3. **Edit a Task**  
   - Allow users to update task details.
   - Users cannot set a past date.

4. **Delete a Task**  
   - Implement a button to remove a task.

5. **Search & Filter**  
   - Search tasks by **title**.
   - Filter tasks by **status**.

6. **Persist Data**  
   - Use **LocalStorage** to save tasks.
   
---

### **2. Optional Enhancements**  

#### **Backend with Node.js (Optional)**  
Candidates familiar with **Node.js** can:  
1. **Build a REST API** with Express.js:
   - `POST /tasks` → Add a task.
   - `GET /tasks` → Retrieve tasks.
   - `PUT /tasks/:id` → Update a task.
   - `DELETE /tasks/:id` → Delete a task.
2. **Use MongoDB (Optional)**  
   - Store tasks in a **MongoDB database** instead of LocalStorage.

#### **Frontend with React or Angular (Optional)**  
Candidates can choose to implement the UI using **React or Angular**:  
1. **Convert the app into a React or Angular application**.
2. **Use React Hooks or Angular Services** to manage state and API calls.
3. **Enhance UI with Material UI (React) or Angular Material**.

---

## **General Requirements**

### **1. Code Quality**  
- Use **clear variable names** and structured code.
- Add **comments** where needed.
- Follow **JavaScript best practices**.

### **2. Version Control**  
- Use **GitHub** for version control.
- Maintain a **clear commit history**.

### **3. Deployment (Bonus)**  
- Deploy the app using **Netlify, Vercel, or Firebase**.
- If backend is implemented, deploy it using **Heroku or AWS**.

---

## **Submission Instructions**

### **Step 1: Fork the Repository**  
- Fork this repository to your GitHub account.

### **Step 2: Complete the Core Features**  
- Implement the **Personal Task Manager** using Vanilla JavaScript, React, or Angular.

### **Step 3: (Optional) Add Backend & Database**  
- If comfortable, implement a **Node.js API** with **MongoDB**.

### **Step 4: Submit the GitHub Repository**  
- Share the **GitHub repository link** once completed.
- If deployed, add the **live demo URL** in the `README.md`.

