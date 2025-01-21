const Event = require("../schemas/event");
const Team = require("../schemas/teamEventRegistration");

exports.adminLogin = (req, res) => {
  return res.status(200).send({ msg: "Login successfull !" });
};

exports.getTeams = async (req, res) => {
  const { eventName } = req.body;
  // console.log(eventName);
  const teamData = await Team.find({ eventName: eventName });
  // console.log(teamData);
  // const totalTeams = new Array(teamData[0].stages.length || 1).fill([]);
  const totalTeams = [];
  for(let i = 0; i < (teamData[0]?.stages?.length || 1); i++){
    totalTeams.push([]);
  }
  // console.log(totalTeams);
  // console.log(teamData);
  // console.log(totalTeams);

  for (let i = 0; i < teamData.length; i++) {
    const team = teamData[i];

    for (let j = team?.stages?.length - 1; j >= 0; j--) {
      // console.log(team.stages[0]?.qualified);
      if (team.stages[j].qualified === true) {
        totalTeams[j].push(team);
      }
    }
  }
  // console.log(totalTeams[0].length, totalTeams[1].length);
  return res.status(200).json(totalTeams);
};
exports.deleteTeam = async (req, res) => {
  const teamId = req.params.id;
  try {
    await Team.findByIdAndDelete(teamId);
    res.status(200).send({ msg: "Successfully Deleted" });
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};
