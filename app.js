import express from "express"; 
import path from "path";
import {Task} from "./Task.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
// why not directly express?
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/developer",(req,res)=>{  res.sendFile(path.join(import.meta.dirname,"public","dev.html"));
});

app.get("/add-task",(req,res)=>{    res.sendFile(path.join(import.meta.dirname,"public","NewTask.html"));
});


app.post("/tasks",(req,res)=>{ 
  console.log(req.body);
  const task = {
    id: uuidv4(),
title: req.body.title,
description:req.body.description,
dueDate : req.body.dueDate,
priority:req.body.priority
};
Task.push(task);
//  console.log(Task[0]);
  res.redirect("/");
});

app.get("/alltasks",(req,res)=>{  res.sendFile(path.join(import.meta.dirname,"public","AllTask.html"));
});


app.get("/api/task",(req,res)=>{  
   console.log(Task[0]);
   res.json(Task);
});


app.use((req,res)=>{  res.status(404).sendFile(path.join(import.meta.dirname,"public","error.html"));
});

app.listen(PORT,()=>{
  console.log(`Your server is running ${PORT} PORT`);
});