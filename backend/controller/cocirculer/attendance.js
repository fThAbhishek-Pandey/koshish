
// const MentorAttendance = () => {
//     try {
      
//     } catch (error) {
//              console.log(error)
//              res.json({success:true, message: error.message})
//     }
// }
// async function CreateNewSession(req, res) {
//   let { session_id, name, duration, location, radius, date, time, token } =
//     req.body;
//   let tokenData = req.user;

//   let newSession = {
//     session_id,
//     date,
//     time,
//     name,
//     duration,
//     location,
//     radius,
//   };

//   try {
//     let teacher = await Teacher.findOneAndUpdate(
//       { email: tokenData.email },
//       { $push: { sessions: newSession } }
//     );

//     res.status(200).json({
//       url: getQR(session_id, teacher.email),
//       message: "Session created successfully",
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// }
// //get sessions
// async function GetAllTeacherSessions(req, res) {
//   try {
//     let tokenData = req.user;
//     const teacher = await Teacher.findOne({ email: tokenData.email });
//     res.status(200).json({ sessions: teacher.sessions });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// }
// //get QR
// async function GetQR(req, res) {
//   try {
//     let tokenData = req.user;
//     let url = getQR(req.body.session_id, tokenData.email);
//     res.status(200).json({ url });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// }

// export {MentorAttendance,CreateNewSession,
//     GetAllTeacherSessions,
//     GetQR,}