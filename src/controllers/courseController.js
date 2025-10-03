const { Course, Exam } = require('../models');


exports.createCourse = async (req,res) => {
const { code, name } = req.body;
const c = await Course.create({ code, name });
res.json(c);
};

exports.getAllCourses = async (req,res)=>{
  const {name} = req.query;
  const where = {};
  if(name){
    where.name = name;
  }
  const courses = await Course.findAll({where});
  res.json(courses);
}

exports.getCourseById = async (req,res) => {
const { id } = req.params;
const course = await Course.findByPk(id);
if(!course){
  return res.status(404).json({error: "Course not found"});
}
res.json(course);
}

exports.createExam = async (req,res) => {
const { courseId, name, date } = req.body;
const e = await Exam.create({ courseId, name, date });
res.json(e);
};