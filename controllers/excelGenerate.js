const EventRegistrations = require("../schemas/teamEventRegistration");
const fastCsv = require("fast-csv");

exports.generateExcel = async (req, res) => {
  const { name } = req.body;
  const cursor = await EventRegistrations.find({ eventName: name }).cursor();

  const filename = `${name}-details.csv`;

  res.setHeader("Content-disposition", `attachment; filename=${filename}`);
  res.writeHead(200, { "Content-Type": "text/csv" });

  res.flushHeaders();

  const csvStream = fastCsv.format({ headers: true }).transform((row, next) => {
    const resObj = {
      "Team Name": row.teamName,
      "Team Leader": row.teamLeader,
      "Problem Statement": row.problemStatement,
      "Field Of Interest": row.fieldOfInterest,
      "Bot Weight": row.botWeight,
      Link: row.driveLink,
    };
    row.member.forEach((element, idx) => {
      resObj[`Member ${idx + 1} name`] = element.name;
      resObj[`Member ${idx + 1} email`] = element.email;
      resObj[`Member ${idx + 1} phone`] = element.phone;
      resObj[`Member ${idx + 1} admission no.`] = element.admissionNumber;
      resObj[`Member ${idx + 1} college`] = element.college;
    });
    row.stages.forEach((element, idx) => {
      resObj[`Stage ${idx + 1}`] = element.qualified;
    });
    return next(null, resObj);
  });

  cursor.pipe(csvStream).pipe(res);
};
