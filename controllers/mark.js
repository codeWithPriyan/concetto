const TeamEventRegistration = require("../schemas/teamEventRegistration");
exports.markAttendanceAndStage = async (req, res) => {
  try {
    const { incomingState = [] } = req.body;
    // console.log("s = ", incomingState);
    for (let state of incomingState) {
      const { teamId, stage, attendance, qualified } = state;
      const requiredTeam = await TeamEventRegistration.findOne({ _id: teamId });
      if ( stage < requiredTeam.stages.length )
      {
        requiredTeam.stages[stage+1].qualified = qualified;
      }
      requiredTeam.stages[stage].attendance = attendance;
      await requiredTeam.save();
    }
    res.status(200).send({ msg: "Marked successfully !" });
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
